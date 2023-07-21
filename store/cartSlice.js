import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
  /* const cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  } */
  return [];
};

const storeInLocalStorage = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

const initialState = {
  carts: fetchFromLocalStorage(),
  itemCount: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const isItemCart = state.carts.find(
        (item) => item.id == action.payload.id
      );
      if (isItemCart) {
        const tempCart = state.carts.map((item) => {
          if (item.id == action.payload.id) {
            let tempQty = item.quantity + action.payload.quantity;
            let tempPrice = tempQty * item.price;
            return { ...item, quantity: tempQty, price: tempPrice };
          } else {
            return item;
          }
        });
        state.carts = tempCart;
        storeInLocalStorage(state.carts);
      } else {
        state.carts.push(action.payload);
        storeInLocalStorage(state.carts);
      }
    },
    removeFromCart: (state, action) => {
      const tempCart = state.carts.filter(
        (item) => item.id !== action.payload.id
      );
      state.carts = tempCart;
      storeInLocalStorage(state.carts);
    },

    clearCart: (state) => {
      state.carts = [];
      storeInLocalStorage(state.carts);
    },
    getCartTotal: (state) => {
      state.totalPrice = state.carts.reduce((cartTotal, cartItem) => {
        cartTotal += cartItem.price * cartItem.quantity;
      }, 0);
      state.itemCount = state.carts.length;
    },
  },
});

export const { addProduct, removeFromCart, clearCart, getCartTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
