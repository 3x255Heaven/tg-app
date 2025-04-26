import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "@libs/axiosInstance";
import { apiRoutes } from "@constants/api";

export type Credentials = {
  email: string;
  password: string;
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
      });
  },
});

export default authSlice.reducer;
