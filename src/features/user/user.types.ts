import { type User } from "@supabase/supabase-js";


export interface UserState {
  session: User | null
}
