import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import productPageSlice from "./slices/productPageSlice";

import productSlice from "./slices/productSlice";


const reducer = combineReducers({
  products: productSlice,
  productPage: productPageSlice,
  
});

const store = configureStore({
  reducer,
  devTools: true,
});

export default store;

