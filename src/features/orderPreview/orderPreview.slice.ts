import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type OrderPreviewItem } from "./orderPreview.types";

const initialState: OrderPreviewItem = {
  status: "",
  carrinho_id: "",
  metodo_envio: "",
  endereco_id: "",
  endereco_view: "",
  isLoading: false
};

const orderPreviewSlice = createSlice({
  name: 'orderPreview',
  initialState,
  reducers: {
    setOrderStatus(state, action: PayloadAction<string | null>) {
      state.status = action.payload;
    },
    setOrderCarrinhId(state, action: PayloadAction<string | null>) {
      state.carrinho_id = action.payload;
    },
    setOrderMetodoEnvio(state, action: PayloadAction<string | null>) {
      state.metodo_envio = action.payload;
    },
    setOrderEnderecoId(state, action: PayloadAction<string | null >) {
      state.endereco_id = action.payload;
    },
    setOrderEnderecoView(state, action: PayloadAction<string |null>) {
      state.endereco_view = action.payload;
    },
    setOrderIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    clearOrderEnderecoId(state) {
      state.endereco_id = ""
    },
    clearOrderEnderecoView(state) {
      state.endereco_view = ""
    },
    clearOrderPreview(state) {
      state.carrinho_id = ""
      state.endereco_id = ""
      state.metodo_envio = ""
      state.status = ""
    },
  }
})

export const {
  setOrderCarrinhId,
  setOrderStatus,
  setOrderMetodoEnvio,
  setOrderEnderecoId,
  clearOrderPreview,
  setOrderEnderecoView,
  setOrderIsLoading,
} = orderPreviewSlice.actions

export default orderPreviewSlice.reducer