import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type UserState } from "./user.types";
import { type User } from "@supabase/supabase-js";

const initialState: UserState = {
  session: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserSlice(state, action: PayloadAction< User | null>){
      state.session = action.payload
    },
    clearUser(state) {
      state.session = null
    }
  },
})

export const { setUserSlice, clearUser } = userSlice.actions
export default userSlice.reducer