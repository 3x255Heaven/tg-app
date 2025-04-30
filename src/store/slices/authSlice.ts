import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "@libs/axiosInstance";
import { apiRoutes } from "@constants/api";

export type Credentials = {
  email: string;
  password: string;
};

export type UpdateProfilePayload = {
  name: string;
  email: string;
};

const initialState: any = {
  user: null,
  isLoading: false,
  error: null,
};

export const loginRequest = createAsyncThunk(
  "auth/login",
  async (credentials: Credentials, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(apiRoutes.login, credentials);

      return response.data.result.user;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const logoutRequest = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await axiosInstance.post(apiRoutes.logout);
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const updateProfile = createAsyncThunk(
  "auth/updateProfile",
  async (
    { userId, name, email }: { userId: string; name: string; email: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axiosInstance.patch(
        `${apiRoutes.updateProfile}/${userId}`,
        { name, email }
      );
      return response.data.result.user;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const changePassword = createAsyncThunk(
  "auth/updateProfile",
  async (
    {
      userId,
      oldPassword,
      newPassword,
    }: { userId: string; oldPassword: string; newPassword: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axiosInstance.post(
        `${apiRoutes.changePassword}/${userId}`,
        { oldPassword, newPassword }
      );
      return response.data.result.user;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginRequest.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(loginRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(logoutRequest.fulfilled, (state) => {
        state.user = null;
        state.isLoading = false;
      })
      .addCase(updateProfile.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
