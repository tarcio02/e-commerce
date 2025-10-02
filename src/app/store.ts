// app/store.ts
import { configureStore, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

type CartItem = {
  id: string
  image: string
  nome: string
  descricao: string
  preco: number
  qty: number
}

type CartState = {
  items: CartItem[]
}

const initialState: CartState = { items: [] }

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const incoming = action.payload
      const existing = state.items.find((i) => i.id === incoming.id)
      if (existing) {
        existing.qty = (existing.qty ?? 1) + 1
      } else {
        state.items.push({ ...incoming, qty: 1 })
      }
    },
    removeItem: (state, action: PayloadAction<{ id: string }>) => {
      state.items = state.items.filter((i) => i.id !== action.payload.id)
    },
    clearCart: (state) => {
      state.items = []
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload)
      if (item) {
        item.qty += 1
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload)
      if (item && item.qty > 1) {
        item.qty -= 1
      }
    },
  },
})

export const { addItem, removeItem, clearCart, decreaseQuantity, increaseQuantity } =
  cartSlice.actions

const saveToLocalStorage = (state: RootState) => {
  try {
    const serialized = JSON.stringify(state.cart.items)
    localStorage.setItem('cart', serialized)
  } catch (e) {
    console.warn('Não foi possível salvar no localStorage', e)
  }
}

const loadFromLocalStorage = () => {
  try {
    const serialized = localStorage.getItem('cart')
    if (serialized === null) return undefined
    return { cart: { items: JSON.parse(serialized) } }
  } catch (e) {
    console.warn('Não foi possível carregar do localStorage', e)
    return undefined
  }
}

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
  preloadedState: loadFromLocalStorage(),
})

store.subscribe(() => saveToLocalStorage(store.getState()))

// Tipos + hooks
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// Selectors úteis
export const selectCartItems = (s: RootState) => s.cart.items
export const selectCartSubtotal = (s: RootState) => {
  const total = s.cart.items.reduce((sum, i) => {
    const preco = typeof i.preco === 'number' ? i.preco : Number(i.preco ?? 0)
    const qty = i.qty ?? 1
    return sum + preco * qty
  }, 0)

  return total
}

export const selectCartCount = (s: RootState) =>
  s.cart.items.reduce((sum, i) => sum + (i.qty ?? 1), 0)
