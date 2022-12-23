import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const Cart = createAsyncThunk(
  "products/qwe",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${getSingleProductAPI}${id}`);

      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const cartPageSlice = createSlice({
  name: "cartPage",
  initialState: {
    loading: false,
    cartItems: [],
    error: null,
  },
  reducers: {
    clearErrors: (state) => {
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    // builder.addCase(fetchProductInfo.pending, (state, action) => {
   
    // }),
    //   builder.addCase(fetchProductInfo.fulfilled, (state, action) => {
 
    //   }),
    //   builder.addCase(fetchProductInfo.rejected, (state, action) => {
        
    //   });
   
  },
});
export const { clearErrors } = cartPageSlice.actions;
export default cartPageSlice.reducer;
