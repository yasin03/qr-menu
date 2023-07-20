import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  product: {},
  products: [],
  categories: [],
};

export const getProduct = createAsyncThunk(
  "products/getProduct",
  async (id) => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    const product = await response.json();

    return product;
  }
);

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products/");
    const products = await response.json();
    console.log(products);
    return products;
  }
);

export const getCategories = createAsyncThunk("getCategories", async () => {
  const { response } = await axios.get(
    "https://fakestoreapi.com/products/categories"
  );

  return response;
});

export const { actions, reducer } = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.product = action.payload;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});
