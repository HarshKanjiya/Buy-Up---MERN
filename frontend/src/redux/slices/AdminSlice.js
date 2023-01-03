import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  deleteOrderAPI,
  deleteProductAPI,
  deleteReviewAPI,
  deleteUserAPI,
  getAdminProductsAPI,
  getAllOrdersAPI,
  getAllReviewsAPI,
  getAllUsersAPI,
  getSingleUserAPI,
  newProductAPI,
  updateOrderStatusAPI,
  updateProductAPI,
  updateUserRoleAPI,
} from "../../APILinks";

const config = {
  Headers: {
    "Content-Type": "application/json",
  },
};

// product oprations
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
export const getAllUsers = createAsyncThunk(
  "admin/getAllUsers",
  async ({}, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(getAllUsersAPI);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const getSingleUser = createAsyncThunk(
  "admin/getSingleUser",
  async ({ id }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${getSingleUserAPI}${id}`);
      console.log("data single user :>> ", data);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const updateUserRole = createAsyncThunk(
  "admin/updateUserRole",
  async ({ id, details }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(
        `${updateUserRoleAPI}${id}`,
        details,
        config
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const deleteUsers = createAsyncThunk(
  "admin/deleteUser",
  async ({ id }, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`${deleteUserAPI}${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// reviews oprations
export const getAllReviews = createAsyncThunk(
  "admin/getAllReviews",
  async ({ productId }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${getAllReviewsAPI}${productId}`);
      return data;
    } catch (error) {
      return rejectWithValue(errorresponse.data.message);
    }
  }
);
export const deleteReviews = createAsyncThunk(
  "admin/deleteReviews",
  async ({ productId, reviewID }, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(
        `${deleteReviewAPI}id=${reviewID}&productID=${productId}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const AdminSlice = createSlice({
  name: "admin",
  initialState: {
    adminUsers: [],
    adminOrders: [],
    adminProducts: [],
    Reviews: [],
    loading: false,
    errorInAdmin: null,
    createdSuccess: false,
    editedSuccess: false,
    deletedSuccess: false,
    product: null,
    user: null,
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

    // get all users
    builder.addCase(getAllUsers.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(getAllUsers.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.adminUsers = payload.users;
    });
    builder.addCase(getAllUsers.rejected, (state, { payload }) => {
      state.loading = false;
      state.errorInOrder = payload;
    });

    // get single user
    builder.addCase(getSingleUser.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(getSingleUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.user = payload;
    });
    builder.addCase(getSingleUser.rejected, (state, { payload }) => {
      state.loading = false;
      state.errorInOrder = payload;
    });

    // update user role
    builder.addCase(updateUserRole.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(updateUserRole.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.editedSuccess = payload.success;
    });
    builder.addCase(updateUserRole.rejected, (state, { payload }) => {
      state.loading = false;
      state.errorInOrder = payload;
    });

    // delete user
    builder.addCase(deleteUsers.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(deleteUsers.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.deletedSuccess = payload.success;
    });
    builder.addCase(deleteUsers.rejected, (state, { payload }) => {
      state.loading = false;
      state.errorInOrder = payload;
    });

    // get all reviews of a single product
    builder.addCase(getAllReviews.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(getAllReviews.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.Reviews = payload.reviews;
    });
    builder.addCase(getAllReviews.rejected, (state, { payload }) => {
      state.loading = false;
      state.errorInOrder = payload;
    });

    // delete reviews
    builder.addCase(deleteReviews.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(deleteReviews.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.deletedSuccess = payload.success;
    });
    builder.addCase(deleteReviews.rejected, (state, { payload }) => {
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
