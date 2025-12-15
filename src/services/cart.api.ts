import type { AccumulateArgs, RpcCartAndItems, UpsertArgs } from "../features/cart/cart.types";
import { supabase } from "./supabaseClient";

type FnAddCartItemRow = {
  quantidade: number | string | null 
}

export const CartService = {
  //Captura ou criar carrinho ativo no banco de dados
  async getCartAndItems(): Promise<RpcCartAndItems> {
  const { data, error } = await supabase
    .rpc('api_get_or_create_cart_and_items')
    .single();

  if (error) throw error;
  if (!data) throw new Error('Nenhum dado retornado pela RPC');

  return data as RpcCartAndItems;
},

  // Envia itens para a de carrinho ativo
  async accumulateCartItemAtomic(
    args: AccumulateArgs | UpsertArgs
  ): Promise<{quantidade: number}> {

    const { carrinho_id, produto_id } = args as AccumulateArgs
    const delta = 
    (args as AccumulateArgs).delta ??
    (args as UpsertArgs).quantidade

    if(!Number.isFinite(delta) || delta === 0 ) {
      return { quantidade: 0 }
    }

    const { data, error } = await supabase
      .rpc('fn_add_cart_item', {
        p_carrinho_id: carrinho_id,
        p_produto_id: produto_id,
        p_quantidade: delta, // positivo para +1, negativo para -1
      })
      .single(); // <— importante

    if (error) {
      console.error('fn_add_cart_item error:', error)
      throw error
    }

    const row = (Array.isArray(data) ? data[0] : data) as FnAddCartItemRow | null

    if (!row || row.quantidade === null || row.quantidade === undefined) {
      // Sua RPC deve sempre retornar a quantidade final; trate como erro se vier vazio
      throw new Error('fn_add_cart_item retornou vazio ou sem "quantidade".')
    }

    const finalQty = Number(row.quantidade)
    if (!Number.isFinite(finalQty)) {
      throw new Error(`"quantidade" inválida retornada: ${row.quantidade as unknown}`)
    }

    return { quantidade: finalQty }
    
  },

  async incrementItem({ carrinho_id, produto_id }: Omit<AccumulateArgs, 'delta'>) {
    return this.accumulateCartItemAtomic({ carrinho_id, produto_id, delta: +1 })
  },

  async decrementItem({ carrinho_id, produto_id }: Omit<AccumulateArgs, 'delta'>) {
    return this.accumulateCartItemAtomic({ carrinho_id, produto_id, delta: -1 })
  },

  
};