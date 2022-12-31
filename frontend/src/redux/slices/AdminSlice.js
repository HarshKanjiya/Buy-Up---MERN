import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getAdminProductsAPI, newProductAPI } from "../../APILinks";

const config = {
  Headers: {
    "Content-Type": "application/json",
  },
};

export const getAdminProducts = createAsyncThunk(
  "Admin/getAdminProducts",
  async ({}, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(getAdminProductsAPI);
      return data;
    } catch (error) {
      rejectWithValue(error.response.data.message);
    }
  }
);
export const createProduct = createAsyncThunk(
  "Admin/createProducts",
  async (details, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(newProductAPI, details, config);
      console.log("data :>> ", data);
      return data;
    } catch (error) {
      rejectWithValue(error.response.data.message);
    }
  }
);

const AdminSlice = createSlice({
  name: "admin",
  initialState: {
    loading: false,
    success: null,
    adminProducts: [],
    errorInAdmin: null,
    product: null,
  },
  reducers: {
    clearErrorsInAdmin: (state) => {
      state.errorInOrder = null;
    },
    clearSuccessInAdmin: (state) => {
      state.success = null;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getAdminProducts.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(getAdminProducts.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.adminProducts = payload.products;
    });
    builder.addCase(getAdminProducts.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
    builder.addCase(createProduct.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(createProduct.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = payload.success;
      state.product = payload.product;
    });
    builder.addCase(createProduct.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});
export const { clearErrorsInAdmin, clearSuccessInAdmin } = AdminSlice.actions;
export default AdminSlice.reducer;
