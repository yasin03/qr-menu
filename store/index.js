import { configureStore } from "@reduxjs/toolkit";

import { reducer as productsReducer } from "./productsStore";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";

export function createStore(preloadedState = {}) {
  const store = configureStore({
    reducer: {
      products: productsReducer,
      product: productSlice,
      carts: cartSlice,
    },
    preloadedState,
  });

  return store;
}

export const store = createStore({});
