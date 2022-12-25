import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createUpdateReviewsAPI, getSingleProductAPI } from "../../APILinks";

export const fetchProductInfo = createAsyncThunk(
  "products/fetchProductInfo",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${getSingleProductAPI}${id}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const submitReview = createAsyncThunk(
  "products/submitReview",
  async ({ productID, comment, rating }, { rejectWithValue }) => {
    try {
      const res = await axios.put(
        createUpdateReviewsAPI,
        { productID, comment, rating },
        { withCredentials: true },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.data.success === true) {
        return res.data;
      } else {
        return rejectWithValue(res.data)
      }
    } catch (error) {
      console.log('error :>> ', error.response.data.message);
      return rejectWithValue(error.response.data.message);
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
  reducers: {
    clearErrors: (state) => {
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProductInfo.pending, (state, action) => {
      state.loading = true;
      state.productInfo = [];
    }),
      builder.addCase(fetchProductInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.productInfo = action.payload;
      }),
      builder.addCase(fetchProductInfo.rejected, (state, action) => {
        state.loading = false;
        state.productInfo = [];
        state.error = action.error.message;
      });
    builder.addCase(submitReview.pending, (state, action) => {
      state.loading = true;
    }),
      builder.addCase(submitReview.fulfilled, (state, action) => {
        state.loading = false;
        state.productInfo = action.payload;

      }),
      builder.addCase(submitReview.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const { clearErrors } = productPageSlice.actions;
export default productPageSlice.reducer;
