import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getSingleProductAPI } from "../../APILinks";

export const fetchProductInfo = createAsyncThunk(
  "products/fetchProductInfo",
  async (id) => {
    try{
        const res = await axios.get(`${getSingleProductAPI}${id}`)
        return res.data
    }catch(error){
        return error.message
    }
  }
);

const productPageSlice = createSlice({
  name: "productPage",
  initialState: {
    loading: false,
    productInfo: [],
    error: null,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProductInfo.pending, (state, action) => {
      state.loading = true;
      state.productInfo = [];
      state.error = null;
    }),
      builder.addCase(fetchProductInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.productInfo = action.payload;
        state.error = null;
      }),
      builder.addCase(fetchProductInfo.rejected, (state, action) => {
        state.loading = false;
        state.productInfo = [];
        state.error = action.error.message;
      });
  },
});

export default productPageSlice.reducer;
