import { apiRoutes } from "@constants/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import axiosInstance from "@libs/axiosInstance";

export type Credentials = {
  email: string;
  password: string;
};

export const loginRequest: any = createAsyncThunk(
  "auth/login",
  async (credentials: Credentials, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(apiRoutes.login, credentials);
      if (!response.data) throw Error;

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const logoutRequest: any = createAsyncThunk("auth/logout", async () => {
  try {
    console.log("Logged Out");
  } catch (error) {
    console.log(error);
  }
});

export const refreshToken: any = createAsyncThunk(
  "auth/refreshToken",
  async () => {
    try {
      const response = await axios.post(apiRoutes.refreshToken);

      if (response.data) {
        return response;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState: any = {
  user: null,
  isLoading: false,
  error: null,
};

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
        state.user = action.payload?.result?.user;
        state.isLoading = false;
      })
      .addCase(loginRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(logoutRequest.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logoutRequest.fulfilled, (state) => {
        state.user = null;
        state.isLoading = false;
      })
      .addCase(logoutRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
