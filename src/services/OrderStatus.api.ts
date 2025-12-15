import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { supabase } from "./supabaseClient";

interface OrderData {
  id: string;
  subtotal: number;
  frete: number | null;
  desconto: number | null;
  total: number;
  status: string;
  carrinho_id: string;
  endereco_id: string | null;
  metodo_envio: string | null
}

interface ItemCart {
  item_id: string;
  id: string;
  imagem?: string 
  nome: string;
  quantidade: number;
  preco: number;
  preco_total: number
}

interface Address {
  id: string;
  zipCode: string;
  street: string;
  number: string;
  complement?: string | null;
  neighborhood: string;
  ref: string;
}

interface OrderResponse {
  pedido: OrderData;
  itens: ItemCart[];
  endereco: Address | null;
}

export type OrderItem = {
  produto_id: string
  nome: string
  imagem: string | string
  quantidade: number
  total_item: number
}

export type Order = {
  id: string
  created_at: string
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled'
  total: number
  items: OrderItem[]
}

export const ordersApi = createApi({
  reducerPath: 'ordersApi',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getOrderStatus: builder.query<OrderResponse, string>({
      async queryFn(pedidoId) {
        const { data, error } = await supabase.rpc(
          'fn_get_pedido_detalhado',
          { p_pedido_id: pedidoId }
        );

        if (error) {
          return {
            error: {
              status: 'RPC_ERROR',
              data: error,
            } as unknown,
          }
        }

        return { data: data as OrderResponse }
      }
    }),
    getOrderHistory: builder.query<Order[], void>({
      async queryFn() {
        const {data, error} = await supabase
        .rpc('fn_get_pedidos_com_itens')

        if(error) {
          console.error('Error ao buscar pedido: ', error)

          return {
            error: {
              status: 'SUPABASE_ERROR',
              error: error.message
            },
          }
        }

        return { data: (data ?? []) as Order[] } 
      }
    })

  })
})

export const { useGetOrderStatusQuery, useGetOrderHistoryQuery } = ordersApi;
