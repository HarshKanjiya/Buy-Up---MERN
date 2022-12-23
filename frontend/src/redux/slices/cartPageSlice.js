import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getSingleProductAPI } from "../../APILinks";

export const addItemToCart = createAsyncThunk(
  "products/addToCart",
  async ({ id, quantity }, { dispatch, rejectWithValue, getState }) => {
    try {
      const { data } = await axios.get(`${getSingleProductAPI}/${id}`);
      dispatch(
        addToCart({
          id: data.product._id,
          name: data.product.name,
          price: data.product.price,
          image: data.product.images[0].url,
          stock: data.product.stock,
          quantity: quantity,
        })
      );

      localStorage.setItem(
        "cartItems",
        JSON.stringify(getState().cart.cartItems)
      );
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
    spacsInfo :null,
  },
  reducers: {
    clearErrors: (state) => {
      state.error = null;
    },
    addToCart: (state, { payload }) => {
      const item = payload;

      var itemExistance = false;
      state.cartItems.map((i) => {
        if (i.id === item.id) {
          itemExistance = true;
        }
      });


      if (itemExistance) {
        state.cartItems.map((i) => {
          if (i.id === item.id) {
            console.log('i.id :>> ', i.id);
            i.quantity = i.quantity + item.quantity;
          }
        });
      } else {
        state.cartItems = [...state.cartItems, item];
      }
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
export const { clearErrors, addToCart } = cartPageSlice.actions;
export default cartPageSlice.reducer;
