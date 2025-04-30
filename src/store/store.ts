import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@store/slices/authSlice";
import courseReducer from "@store/slices/courseSlice";

export const store = configureStore({
  reducer: {
    authReducer,
    courseReducer,
  },
});

export const dispatch = store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
