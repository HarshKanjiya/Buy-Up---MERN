import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  forgotPasswordAPI,
  logInAPI,
  logOutAPI,
  profileAPI,
  resetPasswordAPI,
  routineCheckAPI,
  signUpAPI,
  updatePasswordAPI,
  updateProfileAPI,
} from "../../APILinks";

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
      console.log('response.data.user :>> ', response.data);
      return response.data.user;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const logout = createAsyncThunk(
  "user/logout",
  async ({}, { dispatch, getState, rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.get(logOutAPI, { withCredentials: true });
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
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      return response.data.success;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const updatePassword = createAsyncThunk(
  "user/updatePassword",
  async (
    { oldPassword, newPassword, confirmPassword },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.put(
        updatePasswordAPI,

        { oldPassword, newPassword, confirmPassword },
        { withCredentials: true },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("response.data :>> ", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const resetPassword = createAsyncThunk(
  "user/resetPassword",
  async ({ password, confirmPassword, token }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${resetPasswordAPI}${token}`,
        { password, confirmPassword },
        { withCredentials: true },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const forgotPassword = createAsyncThunk(
  "user/forgotPassword",
  async (email, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        forgotPasswordAPI,
        { email },
        { withCredentials: true },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
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
    isAuthenticated: undefined ,
    userInfo: null,
    error: null,
    underUpdate: false,
    isUpdated: null,
    message: null,
  },
  reducers: {
    clearErrors: (state) => {
      state.error = null;
    },
    setUnderUpdate: (state) => {
      state.underUpdate = true;
    },
    updateProfileReset: (state) => {
      state.isUpdated = false;
    },
    resetMessage: (state) => {
      state.message = null;
    },
  },

  extraReducers: (builder) => {
    // login
    builder.addCase(login.pending, (state, action) => {
      state.loading = true;
      state.isAuthenticated = false;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.userInfo = action.payload;
    });
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
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.userInfo = action.payload;
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.userInfo = null;
      state.error = action.payload;
    });
    //   logout
    builder.addCase(logout.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.userInfo = null;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // loadUser
    builder.addCase(loadUser.pending, (state, action) => {
      state.loading = true;
      state.isAuthenticated = false;
    });
    builder.addCase(loadUser.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.userInfo = action.payload;
    });
    builder.addCase(loadUser.rejected, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.userInfo = null;
      if (action.payload !== "routine123") {
        state.error = action.payload;
      }
    });

    // update profile
    builder.addCase(updateProfile.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.underUpdate = false;
      state.isUpdated = action.payload;
    });
    builder.addCase(updateProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // update password

    builder.addCase(updatePassword.pending, (state, action) => {
      state.loading = true;
    }),
      builder.addCase(updatePassword.fulfilled, (state, action) => {
        state.loading = false;
        state.underUpdate = false;
        state.userInfo = action.payload.user;
        state.isUpdated = action.payload.success;
      });
    builder.addCase(updatePassword.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // forgot password
    builder.addCase(forgotPassword.pending, (state, action) => {
      state.loading = true;
    }),
      builder.addCase(forgotPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      }),
      builder.addCase(forgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
      // reset password
      builder.addCase(resetPassword.pending, (state, action) => {
        state.loading = true;
      }),
      builder.addCase(resetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
        state.isAuthenticated = true;
      }),
      builder.addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
      });
  },
});
export const { clearErrors, setUnderUpdate, updateProfileReset, resetMessage } =
  userSlice.actions;

export default userSlice.reducer;
