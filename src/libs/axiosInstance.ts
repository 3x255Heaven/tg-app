import { clearUser, clearCart } from "@store/slices/authSlice";
import { store } from "@store/store";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "X-API-Key": import.meta.env.VITE_API_KEY,
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401) {
      if (originalRequest.url?.includes("/refresh-token")) {
        store.dispatch(clearUser());
        store.dispatch(clearCart());
        return Promise.reject(error);
      }

      if (!originalRequest._retry) {
        originalRequest._retry = true;
        try {
          await axiosInstance.post("/api/refresh-token");
          return axiosInstance(originalRequest);
        } catch (refreshError) {
          store.dispatch(clearUser());
          store.dispatch(clearCart());
          return Promise.reject(refreshError);
        }
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
