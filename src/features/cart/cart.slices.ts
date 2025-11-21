import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CartState, CartItem, AddToCartPayload } from './cart.types';

const initialState: CartState = {
  id_carrinho: null,
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Define ou substitui o id do carrinho atual
    setCartId(state, action: PayloadAction<string | null>){
      state.id_carrinho = action.payload
    },

    // Substitui a lista de items quando buscar do backend
    setItems(state, action: PayloadAction<CartItem[]>) {
      state.items = action.payload ?? []
    },

    // Adiciona um item ou atualiza se o produto_id já existe.
    upsertItem(state, action: PayloadAction<CartItem>) {
      const item = action.payload
      const idx = state.items.findIndex(i => i.id === item.id)
    
      if(idx >= 0){
        state.items[idx] = {...state.items[idx], ...item}
      } else {
        state.items.unshift(item)
      }
    },

    // Remove item pelo id
    removeItem(state, action: PayloadAction<{id: string}>) {
      state.items = state.items.filter(i => i.id !== action.payload.id)
    },

    // Limpa Carrinho completo
    clearCart(state) {
      state.id_carrinho = null
      state.items = []
    },
    addToCart: (state, action: PayloadAction<AddToCartPayload>) => {
      const { id, nome, preco, imagem = null, quantidade = 1 } = action.payload

      const existing = state.items.find((i) => i.id === id)
      if (existing) {
        existing.quantidade += quantidade
        existing.preco = preco // mantém preco mais recente
        existing.preco_total = existing.preco * existing.quantidade
      } else {
        const novo: CartItem = {
          id,
          nome,
          preco,
          imagem,
          quantidade,
          preco_total: preco * quantidade,
        }
        state.items.push(novo)
      }
    },
    applyDelta(state, action: PayloadAction<{id: string, delta: number}>){
      const { id, delta } = action.payload
      const item = state.items.find((i) => i.id === id)
      if (!item) return 

      const novaQtd = item.quantidade + delta
      if (novaQtd <= 0) {
        state.items = state.items.filter((i) => i.id !== id)
      } else {
        item.quantidade = novaQtd
        item.preco_total = item.preco * novaQtd
      }
    }
  }
})

export const {
  setCartId,
  setItems,
  upsertItem,
  removeItem,
  clearCart,
  addToCart,
  applyDelta, 
} = cartSlice.actions

export default cartSlice.reducer