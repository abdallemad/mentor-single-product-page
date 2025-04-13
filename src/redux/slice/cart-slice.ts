// redux/slices/cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  thumbnail: string;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const isExisting = state.items.find((i) => i.id === action.payload.id);
      // create one 
      if(!isExisting){
        state.items = [...state.items, action.payload];
      }
      // update 
      else{
        state.items = state.items.map((i) => {
          if (i.id === action.payload.id) {
            return {
              ...i,
              quantity: i.quantity + action.payload.quantity,
            };
          }
          return i;
        });
      }
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      
      state.items = state.items.filter((i) => i.id !== action.payload);
    },

    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {},

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
