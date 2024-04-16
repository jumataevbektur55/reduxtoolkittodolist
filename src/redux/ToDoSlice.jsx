import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
};
export const todoSlice = createSlice({
  name: "PRODUCTSLICE",
  initialState,
  reducers: {
    addProduct(state, action) {
      state.product = [...state.product, action.payload];
    },
  },
});

export const { addProduct } = todoSlice.actions;
export default todoSlice.reducer