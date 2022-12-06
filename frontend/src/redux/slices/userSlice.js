import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { logInAPI, logOutAPI, profileAPI, routineCheckAPI, signUpAPI, updateProfileAPI } from "../../APILinks";

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
export const logout = createAsyncThunk(
  "user/logout",
  async ({},{ dispatch, getState, rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.get(logOutAPI,{ withCredentials: true });
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
      const response = await axios.get(routineCheckAPI);
      return response.data.user;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const updateProfile = createAsyncThunk(
  "user/updateProfile",
  async (
    userData,
    { dispatch, getState, rejectWithValue, fulfillWithValue }
  ) => {
    try {
      const response = await axios.put(
        updateProfileAPI,
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

// slice
const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    isAuthenticated: false,
    userInfo: null,
    error: null,
    underUpdate: false,
    isUpdated: null
  },
  reducers: {
    clearErrors: (state) => {
      state.error = null;
    },
    setUnderUpdate: (state) => {
      state.underUpdate = true
    },
    updateProfileReset: (state) => {
      state.isUpdated = false
    }
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
    builder.addCase(logout.pending, (state, action) => {
      state.loading = true;
    }),
      builder.addCase(logout.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.userInfo = null
      }),
      builder.addCase(logout.rejected, (state, action) => {
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

      // update profile
      builder.addCase(updateProfile.pending, (state, action) => {
        state.loading = true;
      }),
        builder.addCase(updateProfile.fulfilled, (state, action) => {
          state.loading = false;
          state.underUpdate = false;
          state.isUpdated = action.payload;
        }),
        builder.addCase(updateProfile.rejected, (state, action) => {
          state.loading = false;
          // state.userInfo = null
          state.error = action.payload;
        });

  },
});
export const { clearErrors,setUnderUpdate,updateProfileReset } = userSlice.actions;

export default userSlice.reducer;
