// store.ts
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './slice/cart-slice'

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

// تعريف RootState و AppDispatch لاستخدامهم لاحقًا
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;