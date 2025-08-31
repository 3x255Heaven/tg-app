import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@store/slices/authSlice";
import courseReducer from "@store/slices/courseSlice";
import checkoutSlice from "@store/slices/checkoutSlice";
import contactSlice from "@store/slices/contactSlice";

export const store = configureStore({
  reducer: {
    authReducer,
    courseReducer,
    checkoutSlice,
    contactSlice,
  },
});

export const dispatch = store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
