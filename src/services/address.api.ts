import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { supabase } from "./supabaseClient";
import type { Address } from "../pages/AddressSelector";

export const addressApi = createApi({
  reducerPath: 'addressApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['Address'],
  endpoints: (builder) => ({
    getAddress: builder.query<Address[], void>({
      async queryFn() {
        const { data, error} = await supabase
          .from('enderecos')
          .select('id,street, neighborhood, number, zipCode, complement, ref, active')
          .order('created_at', { ascending: false });

        if (error) {
          return { error: { status: error.code, data: error } as unknown };
        }
        return { data: data ?? [] };
      },
      providesTags: (result) =>
        result && result.length > 0
          ? [
              // uma tag por item
              ...result.map(({ id }) => ({ type: 'Address' as const, id })),
              // tag "LIST" pra invalidar a lista toda
              { type: 'Address' as const, id: 'LIST' },
            ]
          : [{ type: 'Address' as const, id: 'LIST' }],
    }),
    deleteAddress: builder.mutation({
      async queryFn(id) {
        const { error } = await supabase
          .from("enderecos")
          .delete()
          .eq("id", id)

        if (error) return { error }
        return { data: true }
      },
      invalidatesTags: (_result, _error, id) => [
        { type: 'Address', id },
        { type: 'Address', id: 'LIST' },],
    }),
  })
})

export const { useGetAddressQuery, useDeleteAddressMutation } = addressApi
