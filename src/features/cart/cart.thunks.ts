import { createAsyncThunk } from "@reduxjs/toolkit";
import { CartService } from "../../services/cart.api";
import { applyDelta, setCartId, setItems } from "./cart.slices";
import { mapRpcItemToCartItem } from "./cart.mapper";
import { type RootState } from "../../app/root-reducer";
import { addToCart } from "./cart.slices";
import type { ProductInput } from "./cart.types";

const selectSessionUser = (state: RootState) => state.user.session
const selectCartId = (s: RootState) => s.cart.id_carrinho

export const initCartForAuthenticatedUser = createAsyncThunk(
  'cart/initForUser',
  async (_: void, { dispatch, rejectWithValue }) => {
    try {
      // (Opcional) defensivo: limpar restos do visitante
      // dispatch(clearCart());

      const data = await CartService.getCartAndItems();
      const items = (data.items ?? []).map(mapRpcItemToCartItem);

      dispatch(setCartId(data.cart_id));
      dispatch(setItems(items));
      return { cartId: data.cart_id, count: items.length };
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Falha ao inicializar carrinho';
      console.error('[initCartForAuthenticatedUser] RPC error:', err);
      return rejectWithValue(msg);
    }
  }
);


export const addToCartAndSync = createAsyncThunk<
  { finalQty?: number } | void,
  ProductInput,
  { state: RootState }
>(
  'cart/addAndSync',
  async ({ id, nome, preco, imagem, quantidade = 1}, { dispatch, getState }) => {
    const delta = Math.max(1, Number(quantidade) || 1)

    // 1) Atualiza Redux
    dispatch(addToCart({ id, nome, preco, imagem: imagem ?? null, quantidade: delta }));

    // Captura sessão ativa
    const state = getState();
    const session = selectSessionUser(state)
    // 2) Se não estiver logado, sai (mantém só o Redux)
    if (!session) return;

    // Pega carrinho
    const cartId = selectCartId(state)
    if (!cartId) return

    // Sincroniza no banco com delta positivo
    const res = await CartService.accumulateCartItemAtomic({
      carrinho_id: cartId,
      produto_id: id,
      quantidade: delta
    })

    return { finalQty: res?.quantidade }
  }
);

export const apllyDeltaAndSync = createAsyncThunk<
  { status: 'incremented' | 'decremented' | 'removed'; finalQty?: number },
  { productId: string; delta: number },
  { state: RootState }
>(
  'cart/applyDeltaAsync',
  async ({productId, delta}, { dispatch, getState }) => {
    if (!Number.isFinite(delta) || delta === 0) return { status: 'decremented' }

    const state = getState()
    const before = state.cart.items.find(i => i.id === productId)?.quantidade ?? 0
  
    dispatch(applyDelta({id: productId, delta}))

    const session = selectSessionUser(state)
    const cartId = selectCartId(state)

    if (session && cartId) {
      const res = await CartService.accumulateCartItemAtomic({
        carrinho_id: cartId,
        produto_id: productId,
        quantidade: delta,
      })
    
      const finalQty = res?.quantidade ?? 0
      if (finalQty <= 0) return {status: 'removed', finalQty: 0}
      return { status: delta > 0 ? 'incremented' : 'decremented', finalQty }
    }

    const after = getState().cart.items.find(i => i.id === productId)?.quantidade ?? 0
    if (after === 0 && before > 0) return {status: 'removed', finalQty: 0}
    return { status:  delta > 0 ? 'incremented' : 'decremented', finalQty:  after }
  }
) 