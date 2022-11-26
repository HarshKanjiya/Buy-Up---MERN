import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import productPageSlice from "./slices/productPageSlice";

import productSlice from "./slices/productSlice";


const reducer = combineReducers({
  product: productSlice,
  productPage: productPageSlice,
});

const store = configureStore({
  reducer,
  devTools: true,
});

export default store;

