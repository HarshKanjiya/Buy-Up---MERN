import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getProductsAPI } from "../../APILinks";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try{
        const res =await axios.get(getProductsAPI)
        return res.data
    }catch(error){
        return error.message
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    productInfo: [],
    error: null,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.loading = true;
      state.productInfo = [];
      state.error = null;
    }),
      builder.addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.productInfo = action.payload;
        state.error = null;
      }),
      builder.addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.productInfo = [];
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
