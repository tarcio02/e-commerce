import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';
import { productsApi } from '../services/products.api';
import { addressApi } from '../services/address.api';
import { ordersApi } from '../services/OrderStatus.api';

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(productsApi.middleware)
    .concat(addressApi.middleware)
    .concat(ordersApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
