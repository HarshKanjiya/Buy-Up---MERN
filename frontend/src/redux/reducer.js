import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import productPageSlice from "./slices/productPageSlice";

import productSlice from "./slices/productSlice";
import userSlice from "./slices/userSlice";


const reducer = combineReducers({
  products: productSlice,
  productPage: productPageSlice,
  user: userSlice
});

const store = configureStore({
  reducer,
  devTools: true,
});

export default store;

