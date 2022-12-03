import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { logInAPI, logOutAPI } from "../../APILinks";

export const login = createAsyncThunk(
  "user/login",
  async (
    { email, password },
    { dispatch, getState, rejectWithValue, fulfillWithValue }
  ) => {
    try {
      const response = await axios.post(
        logInAPI,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data.user;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const logOut = createAsyncThunk(
  "user/logout",
  async ({ dispatch, getState, rejectWithValue, fulfillWithValue }) => {
    try{
    const { data } = await axios.get(logOutAPI)
    return data
    }
    catch(error){
        return rejectWithValue(error.response.data.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    isAuthenticated: false,
    userInfo: null,
    error: null,
  },
  reducers: {
    clearErrors: (state) => {
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {
      state.loading = true;
      state.isAuthenticated = false;
    }),
      builder.addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.userInfo = action.payload;
      }),
      builder.addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.userInfo = null;
        state.error = action.payload;
      });

    //   logout
    builder.addCase(logOut.pending, (state, action) => {
        state.loading = true;
        state.isAuthenticated = false;
      }),
        builder.addCase(logOut.fulfilled, (state, action) => {
          state.loading = false;
          state.isAuthenticated = false;
        }),
        builder.addCase(logOut.rejected, (state, action) => {
          state.loading = false;
          state.isAuthenticated = false;
          state.error = action.payload;
        });


  },
});
export const { clearErrors } = userSlice.actions;

export default userSlice.reducer;
