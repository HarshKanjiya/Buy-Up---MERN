import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getAdminProductsAPI, myOrdersAPI, newOrderAPI } from "../../APILinks";

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

const AdminSlice = createSlice({
  name: "admin",
  initialState: {
    loading: false,
    adminProducts: [],
    errorInAdmin: null,
  },
  reducers: {
    clearErrorsInAdmin: (state) => {
      state.errorInOrder = null;
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
  },
});
export const { clearErrorsInAdmin } = AdminSlice.actions;
export default AdminSlice.reducer;
