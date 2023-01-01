import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  deleteProductAPI,
  getAdminProductsAPI,
  newProductAPI,
} from "../../APILinks";

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
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const createProduct = createAsyncThunk(
  "Admin/createProducts",
  async (details, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(newProductAPI, details, config);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const deleteProduct = createAsyncThunk(
  "admin/deleteProduct",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`${deleteProductAPI}/${id}`);
      return data
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
const AdminSlice = createSlice({
  name: "admin",
  initialState: {
    loading: false,
    createdSuccess: false,
    adminProducts: [],
    errorInAdmin: null,
    product: null,
    editedSuccess: false,
    deletedSuccess: false,
  },
  reducers: {
    clearErrorsInAdmin: (state) => {
      state.errorInOrder = null;
    },
    clearCreateSuccessInAdmin: (state) => {
      state.success = false;
    },
    clearEditSuccessInAdmin: (state) => {
      state.editedSuccess = false;
    },
    clearDeleteSuccessInAdmin: (state) => {
      state.deletedSuccess = false;
    },
  },

  extraReducers: (builder) => {
    // get products
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

    // create product
    builder.addCase(createProduct.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(createProduct.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.createdSuccess = payload.success;
      state.product = payload.product;
    });
    builder.addCase(createProduct.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });

    // delete product
    builder.addCase(deleteProduct.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(deleteProduct.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.deletedSuccess = payload.success;
    });
    builder.addCase(deleteProduct.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});
export const {
  clearErrorsInAdmin,
  clearCreateSuccessInAdmin,
  clearEditSuccessInAdmin,
  clearDeleteSuccessInAdmin,
} = AdminSlice.actions;
export default AdminSlice.reducer;
