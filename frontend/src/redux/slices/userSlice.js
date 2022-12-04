import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { logInAPI, logOutAPI, profileAPI, signUpAPI } from "../../APILinks";

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
        { withCredentials: true },
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
export const signup = createAsyncThunk(
  "user/signup",
  async (
    userData,
    { dispatch, getState, rejectWithValue, fulfillWithValue }
  ) => {
    try {
      const response = await axios.post(
        signUpAPI,
        userData,
        { withCredentials: true },
        {
          headers: {
            "Content-Type": "multipart/form-data",
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
    try {
      const { data } = await axios.get(logOutAPI);
      return data.message;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const loadUser = createAsyncThunk(
  "user/loadUser",
  async ({}, { dispatch, getState, rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await axios.get(profileAPI);
      return response.data.user;
    } catch (error) {
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
    // login
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

    // signup
    builder.addCase(signup.pending, (state, action) => {
      state.loading = true;
      state.isAuthenticated = false;
    }),
      builder.addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.userInfo = action.payload;
      }),
      builder.addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.userInfo = null;
        state.error = action.payload;
      });
    //   logout
    builder.addCase(logOut.pending, (state, action) => {
      state.loading = true;
    }),
      builder.addCase(logOut.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
      }),
      builder.addCase(logOut.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // loadUser
    builder.addCase(loadUser.pending, (state, action) => {
      state.loading = true;
      state.isAuthenticated = false;
    }),
      builder.addCase(loadUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.userInfo = action.payload;
      }),
      builder.addCase(loadUser.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.userInfo = null;
        state.error = action.payload;
      });
  },
});
export const { clearErrors } = userSlice.actions;

export default userSlice.reducer;
