import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async (id) => {
    try {
      const res = await axios.get();
      return res.data;
    } catch (error) {
      return error.message;
    }
  }
);

const allProductsSlice = createSlice({
  name: "AllProducts",
  initialState: {
    loading: false,
    allProducts: [],
    error: null,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.pending, (state, action) => {
      state.loading = true;
      state.allProducts = [];
      state.error = null;
    }),
      builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.allProducts = action.payload;
        state.error = null;
      }),
      builder.addCase(fetchAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.allProducts = [];
        state.error = action.error.message;
      });
  },
});

export default allProductsSlice.reducer;
