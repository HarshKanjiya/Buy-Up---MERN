import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { newOrderAPI } from "../../APILinks";

const config = {
  Headers: {
    "Content-Type": "application/json",
  },
};
export const CreateOrderRequest = createAsyncThunk(
  "Orders/orderRequest",
  async ({ order }, { rejectWithValue }) => {
    try {
      const res = await axios.post(newOrderAPI, order, config);
      console.log('res.data :>> ', res.data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const OrderPageSlice = createSlice({
  name: "orderPage",
  initialState: {
    loading: false,
    orders: null,
    errorInOrder: null,
  },
  reducers: {
    clearErrorsInOrder: (state) => {
      state.errorInOrder = null;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(CreateOrderRequest.pending, (state, { payload }) => {
      state.loading = true;
    }),
      builder.addCase(CreateOrderRequest.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.orders = payload;
      }),
      builder.addCase(CreateOrderRequest.rejected, (state, { payload }) => {
        state.loading = false;
        state.errorInOrder = payload;
      });
  },
});
export const { clearErrorsInOrder } = OrderPageSlice.actions;
export default OrderPageSlice.reducer;
