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
    spacsInfo: null,
    PRODUCT_QUANTITY: 1,
    totalCost: 0,
    SHIPPING_INFO: {
      address:'',
      country:'',
      state:'',
      city:'',
      pinCode:'',
      phoneNo:'',
    },
  },
  reducers: {
    clearErrors: (state) => {
      state.error = null;
    },
    setCartFromLocalStorage: (state) => {
      const temp = JSON.parse(localStorage.getItem("cartItems"));
      state.cartItems = temp;
    },
    DeleteCart: (state) => {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify([]));
    },
    removeItemFromCart: (state, { payload }) => {
      const id = payload;
      const temp = [];
      state.cartItems.map((i) => {
        if (i.id !== id) {
          temp.push(i);
        }
      });
      state.cartItems = temp;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
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
            i.quantity = i.quantity + item.quantity;
            if (i.quantity > i.stock) {
              i.quantity = i.stock;
            }
          }
        });
      } else {
        state.cartItems = [...state.cartItems, item];
      }
    },
    setSpacsInfo: (state, { payload }) => {
      state.spacsInfo = payload;
      state.PRODUCT_QUANTITY = payload ? payload.quantity : 0;
    },
    addQuantityFromSpacs: (state, { payload }) => {
      const id = payload;
      const temp = [];
      state.cartItems.map((i) => {
        if (i.id === id) {
          temp.push({ ...i, quantity: i.quantity + 1 });
        } else {
          temp.push(i);
        }
      });
      state.cartItems = temp;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeQuantityFromSpacs: (state, { payload }) => {
      const id = payload;
      const temp = [];
      state.cartItems.map((i) => {
        if (i.id === id) {
          temp.push({ ...i, quantity: i.quantity - 1 });
        } else {
          temp.push(i);
        }
      });
      state.cartItems = temp;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    addIntoQuantity: (state) => {
      state.PRODUCT_QUANTITY = state.PRODUCT_QUANTITY + 1;
    },
    removeIntoQuantity: (state) => {
      state.PRODUCT_QUANTITY = state.PRODUCT_QUANTITY - 1;
    },
    getTotalCost: (state) => {
      let cost = 0;
      state.cartItems.map((i) => {
        cost = cost + i.price * i.quantity;
      });
      state.totalCost = cost;
    },

    // shipping infooo
    SAVE_SHIPPING_INFO: (state, { payload }) => {
      state.SHIPPING_INFO = payload;
      localStorage.setItem("shippingInfo", JSON.stringify(payload));
      // console.log('done :>> ',payload );
    },
    GET_SHIPPING_INFO_FROM_LOCALSTORAGE: (state) => {
      state.SHIPPING_INFO = JSON.parse(localStorage.getItem("shippingInfo"));
      // console.log('state.SHIPPING_INFO :>> ', state.SHIPPING_INFO);
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
export const {
  clearErrors,
  addToCart,
  setCartFromLocalStorage,
  DeleteCart,
  removeItemFromCart,
  setSpacsInfo,
  addQuantityFromSpacs,
  removeQuantityFromSpacs,
  addIntoQuantity,
  removeIntoQuantity,
  getTotalCost,
  SAVE_SHIPPING_INFO,
  GET_SHIPPING_INFO_FROM_LOCALSTORAGE,
} = cartPageSlice.actions;

export default cartPageSlice.reducer;
