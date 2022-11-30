import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getProductsAPI } from "../../APILinks";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async ({ keyword, page, price = [0, 150000], category, ratings }) => {
    let link = `${getProductsAPI}?keyword=${keyword ? keyword : ""}&page=${
      page ? page : "1"
    }&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${
      ratings ? ratings : "0"
    }`;

    if (category) {
      link = `${getProductsAPI}?keyword=${keyword ? keyword : ""}&page=${
        page ? page : "1"
      }&price[gte]=${price[0]}&price[lte]=${
        price[1]
      }&category=${category}&ratings[gte]=${ratings ? ratings : "0"}`;
    }

    try {
      const res = await axios.get(link);
      return res.data;
    } catch (error) {
      return error.message;
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    productInfo: [],
    resultPerPage: 15,
    filteredProductCount: 0,
    error: null,
  },
  reducers: {
    clearErrors: (state) => {
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.loading = true;
      state.productInfo = [];
      state.error = null;
    }),
      builder.addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.productInfo = action.payload;
        state.resultPerPage = action.payload.resultPerPage;
        state.filteredProductCount = action.payload.filteredProductCount;
        state.error = null;
      }),
      builder.addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.productInfo = [];
        state.error = action.error.message;
      });
  },
});
export const { clearErrors } = productSlice.reducer;

export default productSlice.reducer;
