import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    isProductModalOpen: false,
    isCartModalOpen: false,
  },
  reducers: {
    toggleProductModal: (state) => {
      state.isProductModalOpen = !state.isProductModalOpen;
    },
    toggleCartModal: (state) => {
      state.isCartModalOpen = !state.isCartModalOpen;
    },
  },
});

export const { toggleProductModal, toggleCartModal } = productSlice.actions;

export default productSlice.reducer;
