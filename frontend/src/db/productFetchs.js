import axios from "axios";
import {
  FETCH_PRODUCT_STARTED,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  CLEAR_ERRORS,
} from "../redux/slices/productSlice";

import { createAsyncThunk } from "@reduxjs/toolkit"

export const getProducts = createAsyncThunk(
    'fetchUser',
    async () => {
        const {data} = await axios.get('/api/v1/products')
        console.log('data :>> ', data);
    }
)