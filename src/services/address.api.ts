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
    }),
  })
})

export const { useGetAddressQuery } = addressApi
