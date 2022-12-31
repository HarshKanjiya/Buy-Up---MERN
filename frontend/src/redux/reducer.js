import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import AdminSlice from "./slices/AdminSlice";
import cartPageSlice from "./slices/cartPageSlice";
import OrderSlice from "./slices/OrderSlice";
import productPageSlice from "./slices/productPageSlice";

import productSlice from "./slices/productSlice";
import userSlice from "./slices/userSlice";

let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : [],
    
  },
};

const reducer = combineReducers({
  products: productSlice,
  productPage: productPageSlice,
  user: userSlice,
  cart: cartPageSlice,
  order: OrderSlice,
  admin: AdminSlice
});

const store = configureStore({
  initialState,
  reducer,
  devTools: true,
});

export default store;
