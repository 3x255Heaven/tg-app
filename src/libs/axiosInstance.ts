import { BASE_URL } from "@constants/api";
import { logoutRequest } from "@store/slices/authSlice";
import { store } from "@store/store";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        await axiosInstance.post("/api/refresh-token");
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        store.dispatch(logoutRequest());
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
