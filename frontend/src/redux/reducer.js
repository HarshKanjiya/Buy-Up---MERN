import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import cartPageSlice from "./slices/cartPageSlice";
import productPageSlice from "./slices/productPageSlice";

import productSlice from "./slices/productSlice";
import userSlice from "./slices/userSlice";

let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
  },
};

const reducer = combineReducers({
  products: productSlice,
  productPage: productPageSlice,
  user: userSlice,
  cart: cartPageSlice,
});

const store = configureStore({
  initialState,
  reducer,
  devTools: true,
});

export default store;
