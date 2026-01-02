import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { supabase } from "./supabaseClient";
import { type Itens } from "../components/layout/Catalogo";

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['Product'],
  endpoints: (builder) => ({
    getProducts: builder.query<Itens[], void>({
      async queryFn() {
        const { data, error } = await supabase
          .from('produtos')
          .select('id,categoria_id,nome,imagem,descricao,preco, old_price,desconto,criado_em,atualizado_em,destaque,frete_gratis,categoria')
          .order('criado_em', { ascending: false });

        if (error) {
          return { error: { status: error.code, data: error } as unknown };
        }
        return { data: data };
      },
    }),

    getProductById: builder.query({
      async queryFn(id: string) {
        const { data, error } = await supabase
          .from('produtos')
          .select('*')
          .eq('id', id)
          .single()

        if (error) return { error }
        return { data }
      },

      providesTags: (id) => [{ type: "Product", id }],
    })
  })
})

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi;
