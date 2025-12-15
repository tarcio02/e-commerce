import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  console.log(
    ">>> mp-checkout INVOCADO:",
    req.method,
    new Date().toISOString()
  );

  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    });
  }

  if (req.method !== "POST") {
    return new Response("Method not allowed", {
      status: 405,
      headers: corsHeaders,
    });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const mpToken = Deno.env.get("MERCADO_PAGO_ACCESS_TOKEN")!;
    const frontendUrl = Deno.env.get("FRONTEND_URL")!;
    const webhookUrl = Deno.env.get("MP_WEBHOOK_URL") || "";

    console.log(">>> usando notification_url:", webhookUrl);

    // ✅ valida se a env está setada e com formato minimamente válido
    if (!webhookUrl) {
      console.error("MP_WEBHOOK_URL não configurada");
      return new Response(
        JSON.stringify({ error: "MP_WEBHOOK_URL não configurada" }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    try {
      // se o formato estiver muito errado, isso aqui já estoura
      new URL(webhookUrl);
    } catch {
      console.error("MP_WEBHOOK_URL com formato inválido:", webhookUrl);
      return new Response(
        JSON.stringify({
          error: "MP_WEBHOOK_URL com formato inválido",
          url: webhookUrl,
        }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const authHeader = req.headers.get("Authorization") ?? "";

    const supabase = createClient(supabaseUrl, serviceRoleKey, {
      global: { headers: { Authorization: authHeader } },
    });

    // 1) usuário logado
    const { data: auth } = await supabase.auth.getUser();
    const user = auth?.user;
    if (!user) {
      return new Response("Unauthorized", {
        status: 401,
        headers: corsHeaders,
      });
    }

    // 2) dados do body
    const body = await req.json();
    const { metodo_envio, carrinho_id, endereco_id } = body;

    if (!metodo_envio || !carrinho_id) {
      return new Response("Dados insuficientes", {
        status: 400,
        headers: corsHeaders,
      });
    }

    // 3) criar pedido (trigger BEFORE calcula total)
    const { data: pedido, error: pedidoError } = await supabase
      .from("pedidos")
      .insert({
        profile_id: user.id,
        metodo_envio,
        carrinho_id,
        endereco_id: metodo_envio === "delivery" ? endereco_id : null,
        status: "pending",
      })
      .select("id, total, carrinho_id, status")
      .single();

    if (pedidoError || !pedido) {
      console.error("Erro ao criar pedido:", pedidoError);
      return new Response(
        JSON.stringify({
          error: "Erro ao criar pedido",
          details: pedidoError?.message ?? null,
          hint: pedidoError?.hint ?? null,
          code: pedidoError?.code ?? null,
        }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    // 4) buscar itens do carrinho
    const { data: itens, error: itensError } = await supabase
      .from("itens_carrinho")
      .select("produto_id, quantidade, preco_unitario")
      .eq("carrinho_id", pedido.carrinho_id);

    if (itensError || !itens || itens.length === 0) {
      console.error("Erro itens:", itensError);
      return new Response("Carrinho sem itens", {
        status: 400,
        headers: corsHeaders,
      });
    }

    // 5) buscar produtos
    const produtoIds = [...new Set(itens.map((i) => i.produto_id))];

    const { data: produtos, error: produtosError } = await supabase
      .from("produtos")
      .select("id, nome, preco")
      .in("id", produtoIds);

    if (produtosError || !produtos || produtos.length === 0) {
      console.error("Erro produtos:", produtosError);
      return new Response("Produtos não encontrados", {
        status: 400,
        headers: corsHeaders,
      });
    }

    const mapProdutos = new Map(produtos.map((p) => [p.id, p]));

    // 6) montar items pro MP
    const mpItems = itens.map((item) => {
      const produto = mapProdutos.get(item.produto_id);
      const unit_price = produto?.preco ?? item.preco_unitario;

      return {
        title: `Número do Pedido: ${pedido.id}`,
        quantity: item.quantidade,
        unit_price,
        currency_id: "BRL",
      };
    });

    // 7) montar back_urls com pedido_id na query
    const returnUrl = `${frontendUrl}/checkout/status?pedido_id=${pedido.id}`;

    // 8) criar preferência no MP
    const mpRes = await fetch(
      "https://api.mercadopago.com/checkout/preferences",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${mpToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: mpItems,
          external_reference: pedido.id,
          notification_url: webhookUrl,
          back_urls: {
            success: returnUrl,
            failure: returnUrl,
            pending: returnUrl,
          },
          auto_return: "approved",
          payment_methods: {
            installments: 12,
          },
        }),
      }
    );

    // ⚠️ PRIMEIRO lê o JSON, depois usa
    const mpData = await mpRes.json();

    if (!mpRes.ok) {
      console.error("Erro MP:", mpData);
      return new Response(
        JSON.stringify({
          error: "Erro ao criar preferência MP",
          details: mpData,
        }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    // 9) desativar carrinho
    if (!carrinho_id) {
      return new Response(
        JSON.stringify({ error: "carrinho_id é obrigatório" }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const { error: carrinhoError } = await supabase
      .from("carrinhos")
      .update({ ativo: false })
      .eq("id", carrinho_id);

    if (carrinhoError) {
      console.log("Erro ao desativar carrinho: ", carrinhoError);

      return new Response(
        JSON.stringify({ error: "Erro ao desativar carrinho" }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    // 10) Guardar mp_preference_id no pedido
    await supabase
      .from("pedidos")
      .update({ mp_preference_id: mpData.id })
      .eq("id", pedido.id);

    return new Response(
      JSON.stringify({
        pedido_id: pedido.id,
        preference_id: mpData.id,
        init_point: mpData.init_point,
        sandbox_init_point: mpData.sandbox_init_point,
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (err) {
    console.error("Erro inesperado:", err);
    return new Response("Erro interno", {
      status: 500,
      headers: corsHeaders,
    });
  }
});
