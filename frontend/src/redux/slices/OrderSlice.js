import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { myOrdersAPI, newOrderAPI } from "../../APILinks";

const config = {
  Headers: {
    "Content-Type": "application/json",
  },
};
export const CreateOrderRequest = createAsyncThunk(
  "Orders/orderRequest",
  async (order, { rejectWithValue }) => {
    try {
      const res = await axios.post(newOrderAPI, order, config);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const getUserOrders = createAsyncThunk(
  "order/getOrders",
  async ({},{ rejectWithValue }) => {
    try {
      const { data } = await axios.get(myOrdersAPI);
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

const OrderPageSlice = createSlice({
  name: "orderPage",
  initialState: {
    loading: false,
    orderList: [],
    orderInfo:null,
    errorInOrder: null,
    message:null,
  },
  reducers: {
    clearErrorsInOrder: (state) => {
      state.errorInOrder = null;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(CreateOrderRequest.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(CreateOrderRequest.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.orderInfo = payload.order
    });
    builder.addCase(CreateOrderRequest.rejected, (state, { payload }) => {
      state.loading = false;
      state.errorInOrder = payload;
    });
    builder.addCase(getUserOrders.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(getUserOrders.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.orderList = payload.orders;
    });
    builder.addCase(getUserOrders.rejected, (state, { payload }) => {
      state.loading = false;
      state.errorInOrder = payload;
    });
  },
});
export const { clearErrorsInOrder } = OrderPageSlice.actions;
export default OrderPageSlice.reducer;
