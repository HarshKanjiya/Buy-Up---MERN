import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  deleteOrderAPI,
  deleteProductAPI,
  getAdminProductsAPI,
  getAllOrdersAPI,
  newProductAPI,
  updateOrderStatusAPI,
  updateProductAPI,
} from "../../APILinks";

const config = {
  Headers: {
    "Content-Type": "application/json",
  },
};

// crud on product
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
export const updateProduct = createAsyncThunk(
  "admin/updateProduct",
  async ({ id, newDetails }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(`${updateProductAPI}${id}`, newDetails);
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
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// order oprations
export const getAdminOrders = createAsyncThunk(
  "admin/getOrders",
  async ({}, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(getAllOrdersAPI);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const updateOrderStatus = createAsyncThunk(
  "admin/updateOrders",
  async ({ id, order }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(
        `${updateOrderStatusAPI}${id}`,
        order,
        config
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const deleteOrder = createAsyncThunk(
  "admin/deleteOrders",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`${deleteOrderAPI}${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// user oprations

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
    adminOrders: [],
    profit: 0,
  },
  reducers: {
    clearErrorsInAdmin: (state) => {
      state.errorInOrderInOrder = null;
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
      state.errorInOrder = payload;
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
      state.errorInOrder = payload;
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
      state.errorInOrder = payload;
    });

    // update product
    builder.addCase(updateProduct.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(updateProduct.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.editedSuccess = payload.success;
    });
    builder.addCase(updateProduct.rejected, (state, { payload }) => {
      state.loading = false;
      state.errorInOrder = payload;
    });

    // get orders
    builder.addCase(getAdminOrders.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(getAdminOrders.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.adminOrders = payload.orders;
      state.profit = payload.totalAmmount;
    });
    builder.addCase(getAdminOrders.rejected, (state, { payload }) => {
      state.loading = false;
      state.errorInOrder = payload;
    });

    // update Order Status
    builder.addCase(updateOrderStatus.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(updateOrderStatus.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.editedSuccess = payload.success;
    });
    builder.addCase(updateOrderStatus.rejected, (state, { payload }) => {
      state.loading = false;
      state.errorInAdmin = payload;
    });

    // delete order
    builder.addCase(deleteOrder.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(deleteOrder.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.deletedSuccess = payload.success;
    });
    builder.addCase(deleteOrder.rejected, (state, { payload }) => {
      state.loading = false;
      state.errorInOrder = payload;
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
