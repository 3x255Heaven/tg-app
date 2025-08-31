import { apiRoutes } from "@constants/api";
import axiosInstance from "@libs/axiosInstance";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

interface ContactState {
  loading: boolean;
  success: boolean;
  error: string | null;
}

const initialState: ContactState = {
  loading: false,
  success: false,
  error: null,
};

export const sendContactForm = createAsyncThunk<
  void,
  ContactFormData,
  { rejectValue: string }
>("contact/sendContactForm", async (formData, { rejectWithValue }) => {
  try {
    await axiosInstance.post(apiRoutes.contactSubmit, formData);
  } catch (err: any) {
    return rejectWithValue(
      err.response?.data?.message || "Something went wrong"
    );
  }
});

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    resetContactState(state) {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendContactForm.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(sendContactForm.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(
        sendContactForm.rejected,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.success = false;
          state.error = action.payload || "Failed to send message";
        }
      );
  },
});

export const { resetContactState } = contactSlice.actions;
export default contactSlice.reducer;
