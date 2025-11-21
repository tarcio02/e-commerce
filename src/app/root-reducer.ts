import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cart.slices';
import userReducer from '../features/cart/user.slice'
import { productsApi } from '../services/products.api';
import { addressApi } from '../services/address.api';

export const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  [productsApi.reducerPath]: productsApi.reducer,
  [addressApi.reducerPath]: addressApi.reducer
});

export type RootState = ReturnType<typeof rootReducer>;
