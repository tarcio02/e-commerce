import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cart.slices';
import userReducer from '../features/user/user.slice'
import orderPreviewSlice from '../features/orderPreview/orderPreview.slice'
import { productsApi } from '../services/products.api';
import { addressApi } from '../services/address.api';
import { ordersApi } from '../services/OrderStatus.api';

export const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  orderPreview: orderPreviewSlice,
  [productsApi.reducerPath]: productsApi.reducer,
  [addressApi.reducerPath]: addressApi.reducer,
  [ordersApi.reducerPath]: ordersApi.reducer
});

export type RootState = ReturnType<typeof rootReducer>;
