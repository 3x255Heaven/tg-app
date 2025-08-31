// src/store/slices/checkoutSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@libs/axiosInstance";
import { apiRoutes } from "@constants/api";
import { toast } from "react-toastify";

export type CheckoutRequest = {
  courseIds: string[];
  amount: number;
  returnUrl: string;
  cancelUrl: string;
  errorUrl: string;
  lang: string;
  currencyCode: 978 | 941;
};

export type CheckoutState = {
  loading: boolean;
  data: any | null;
  error: string | null;
};

export const getCheckoutData = createAsyncThunk(
  "checkout/getCheckoutData",
  async (checkoutData: CheckoutRequest, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        apiRoutes.checkoutData,
        checkoutData
      );
      return response.data;
    } catch (error: any) {
      const message =
        error.response?.data?.message || "Checkout request failed";
      toast.error(message);
      return rejectWithValue(message);
    }
  }
);

const initialState: CheckoutState = {
  loading: false,
  data: null,
  error: null,
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    resetCheckout: (state) => {
      state.loading = false;
      state.data = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCheckoutData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCheckoutData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getCheckoutData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetCheckout } = checkoutSlice.actions;
export default checkoutSlice.reducer;
