import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  }

  if (req.method !== "POST") {
    // não precisa tretar com erro pro MP
    return new Response("ok", {
      status: 200,
      headers: { "Access-Control-Allow-Origin": "*" },
    });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const mpToken = Deno.env.get("MERCADO_PAGO_ACCESS_TOKEN")!;

    const supabase = createClient(supabaseUrl, serviceRoleKey);

    // body pode vir vazio em alguns eventos, então trato com cuidado
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const body = (await req.json().catch(() => null)) as any;
    console.log("Webhook body MP:", body);

    // pegar dados da query string: ?id=...&topic=...
    const url = new URL(req.url);
    const queryId = url.searchParams.get("id");
    const topic = url.searchParams.get("topic"); // "payment" ou "merchant_order"
    console.log("Webhook query:", { queryId, topic });

    let orderId: string | undefined;
    let mpStatus: string | undefined;
    let mpPaymentId: string | undefined;

    // ======================
    // 1) TOPIC = payment
    // ======================
    if (topic === "payment") {
      const paymentId: string | undefined =
        body?.data?.id ??
        body?.id ??
        body?.resource?.split("/").pop() ??
        queryId ??
        undefined;

      console.log("paymentId (payment topic):", paymentId);

      if (!paymentId) {
        console.error("paymentId não encontrado no webhook (payment)");
        return new Response("ok", {
          status: 200,
          headers: { "Access-Control-Allow-Origin": "*" },
        });
      }

      const mpResp = await fetch(
        `https://api.mercadopago.com/v1/payments/${paymentId}`,
        {
          headers: {
            Authorization: `Bearer ${mpToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!mpResp.ok) {
        const text = await mpResp.text();
        console.error("Erro ao buscar pagamento no MP:", text);
        return new Response("ok", {
          status: 200,
          headers: { "Access-Control-Allow-Origin": "*" },
        });
      }

      const payment = await mpResp.json();
      console.log("Detalhes do pagamento (payment):", payment);

      mpStatus = payment.status;
      orderId = payment.external_reference ?? payment.metadata?.order_id;
      mpPaymentId = payment.id;
    }
    // ===========================
    // 2) TOPIC = merchant_order
    // ===========================
    else if (topic === "merchant_order") {
      const merchantOrderId: string | undefined =
        queryId ??
        body?.data?.id ??
        body?.id ??
        body?.resource?.split("/").pop() ??
        undefined;

      console.log("merchantOrderId:", merchantOrderId);

      if (!merchantOrderId) {
        console.error("merchantOrderId não encontrado no webhook");
        return new Response("ok", {
          status: 200,
          headers: { "Access-Control-Allow-Origin": "*" },
        });
      }

      const moResp = await fetch(
        `https://api.mercadopago.com/merchant_orders/${merchantOrderId}`,
        {
          headers: {
            Authorization: `Bearer ${mpToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!moResp.ok) {
        const text = await moResp.text();
        console.error("Erro ao buscar merchant_order no MP:", text);
        return new Response("ok", {
          status: 200,
          headers: { "Access-Control-Allow-Origin": "*" },
        });
      }

      const merchantOrder = await moResp.json();
      console.log("Detalhes merchant_order:", merchantOrder);

      // external_reference é o pedido.id que você mandou na preferência
      orderId = merchantOrder.external_reference;
      const firstPayment = merchantOrder.payments?.[0];

      if (!firstPayment) {
        console.error("Nenhum pagamento associado na merchant_order");
        return new Response("ok", {
          status: 200,
          headers: { "Access-Control-Allow-Origin": "*" },
        });
      }

      mpStatus = firstPayment.status; // approved | pending | rejected | etc.
      mpPaymentId = firstPayment.id;
      console.log("Payment dentro da merchant_order:", firstPayment);
    } else {
      console.log("Topic não tratado:", topic);
      return new Response("ok", {
        status: 200,
        headers: { "Access-Control-Allow-Origin": "*" },
      });
    }

    if (!orderId || !mpStatus) {
      console.error("orderId ou mpStatus não encontrados:", {
        orderId,
        mpStatus,
      });
      return new Response("ok", {
        status: 200,
        headers: { "Access-Control-Allow-Origin": "*" },
      });
    }

    // 🔍 Log antes de tentar atualizar
    console.log(">>> Antes do update, orderId/mpStatus/mpPaymentId:", {
      orderId,
      mpStatus,
      mpPaymentId,
      typeofOrderId: typeof orderId,
    });

    // ✅ Antes de atualizar, garante que o orderId é um UUID válido
    const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
      orderId
    );

    if (!isUuid) {
      console.error("orderId NÃO é UUID válido, ignorando update:", { orderId });
      return new Response("ok", {
        status: 200,
        headers: { "Access-Control-Allow-Origin": "*" },
      });
    }

    let novoStatusPgto = "pendente";

    switch (mpStatus) {
      case "approved":
        novoStatusPgto = "confirmed";
        break;
      case "rejected":
        novoStatusPgto = "recusado";
        break;
      case "in_process":
      case "pending":
        novoStatusPgto = "pending";
        break;
      case "refunded":
      case "charged_back":
        novoStatusPgto = "estornado";
        break;
      case "cancelled":
        novoStatusPgto = "cancelado";
        break;
      default:
        console.warn("Status MP não mapeado:", mpStatus);
        break;
    }

    const { error: updateError } = await supabase
      .from("pedidos")
      .update({
        status_pgto: novoStatusPgto,
        mp_payment_id: mpPaymentId ?? null,
      })
      .eq("id", orderId);

    if (updateError) {
      console.error("Erro ao atualizar pedido:", updateError);
    } else {
      console.log("✅ Pedido atualizado:", { orderId, novoStatusPgto, mpPaymentId });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (err) {
    console.error("Erro inesperado no webhook:", err);
    return new Response("ok", {
      status: 200,
      headers: { "Access-Control-Allow-Origin": "*" },
    });
  }
});
