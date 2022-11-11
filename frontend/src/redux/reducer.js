import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import productSlice from "./slices/productSlice";


const reducer = combineReducers({
  product: productSlice,
});

const store = configureStore({
  reducer,
  devTools: true,
});

export default store;

