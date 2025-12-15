import { supabase } from "./supabaseClient";

type MpCheckoutRawResponse = {
  pedido_id: string;
  preference_id: string;
  init_point?: string;
  sandbox_init_point?: string;
};

export type MpCheckoutResponse = {
  pedidoId: string;
  preferenceId: string;
  initPoint?: string;
  checkoutUrl?: string;
};

export async function paymentPreference(params: {
  carrinho_id: string | null;
  metodo_envio: string | null;
  endereco_id: string | null;
}): Promise<MpCheckoutResponse> {
  // 🛡️ validação básica antes de chamar a edge
  if (!params.carrinho_id) {
    throw new Error("Carrinho inválido");
  }

  if (!params.metodo_envio) {
    throw new Error("Método de envio não informado");
  }

  const payload = {
    carrinho_id: params.carrinho_id,
    metodo_envio: params.metodo_envio,
    endereco_id:
      params.metodo_envio === "pickup" ? null : params.endereco_id ?? null,
  };

  const { data, error } = await supabase.functions.invoke<MpCheckoutRawResponse>(
    "mp-checkout",
    { body: payload }
  );

  console.log("mp-checkout data/error =>", { data, error });

  if (error) {
    throw new Error(error.message ?? "Erro ao chamar mp-checkout");
  }

  if (!data) {
    throw new Error("Resposta vazia da função mp-checkout");
  }

  // pega a URL de redirecionamento
  const redirectUrl = data.init_point ?? data.sandbox_init_point;

  return {
    pedidoId: data.pedido_id,
    preferenceId: data.preference_id,
    initPoint: redirectUrl,
    checkoutUrl: redirectUrl,
  };
}

