import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    isProductModalOpen: false,
  },
  reducers: {
    toggleProductModal: (state) => {
      state.isProductModalOpen = !state.isProductModalOpen;
    },
  },
});

export const { toggleProductModal } = productSlice.actions;

export default productSlice.reducer;
