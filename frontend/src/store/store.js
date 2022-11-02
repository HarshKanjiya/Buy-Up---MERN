import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./slices/ProductSlice";


const reducer = combineReducers({
  product: ProductSlice ,
});

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
