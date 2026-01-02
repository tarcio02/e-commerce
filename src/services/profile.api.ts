import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import { supabase } from "./supabaseClient";

type ProfileRow = {
  id: string
  created_at: string
  metadata: {
    full_name?: string
    phone?: string
    email?: string
    [key: string]: unknown
  } | null
}

export const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['Profile'],

  endpoints: (builder) => ({
    getProfileData: builder.query<ProfileRow, void>({
      providesTags: ['Profile'],

      async queryFn() {
        try {
          const {data: authData, error: authError} = await supabase.auth.getUser()
        
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          if (authError) return { error: authError as any }

          const user = authData?.user
          if (!user) {
            return { error: {message: 'Nenhum usuário autenticado.'}}
          }

          const { data, error } = await supabase
          .from('profiles')
          .select('id, created_at, metadata')
          .eq('id', user.id)
          .single()

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          if(error) return {error: error as any}

          return { data: data as ProfileRow }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
          return { error: e}
        }
      },
    }),

  })
})

export const { useGetProfileDataQuery } = profileApi