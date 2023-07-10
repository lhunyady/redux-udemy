import { createSlice } from "@reduxjs/toolkit";

//{ title: 'Test Item', quantity: 3, total: 18, price: 6 }
const initialState = { items: [], totalQuantity: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      const { id, title, total, quantity, price } = action.payload;
      const existingItem = state.items.find((x) => x.id === id);
      state.totalQuantity += quantity;

      if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.total += total;
        return;
      }
      state.items.push({ id, price, quantity, total, title });
    },
    remove(state, action) {
      const { id, total, quantity } = action.payload;
      const existingItem = state.items.find((x) => x.id === id);
      state.totalQuantity -= quantity;

      if (existingItem.quantity === quantity) {
        state.items = state.items.filter((x) => x.id !== existingItem.id);
        return;
      }

      existingItem.quantity -= quantity;
      existingItem.total -= total;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
