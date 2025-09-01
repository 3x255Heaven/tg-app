import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/store";
import { resetPassword } from "@store/slices/authSlice";
import { toast } from "react-toastify";
import { generalRoutes } from "@routes";

import KeyIcon from "@assets/svgs/icons/KeyIcon";
import EyeIcon from "@assets/svgs/icons/EyeIcon";
import Spinner from "@assets/svgs/Spinner";
import AdminDashboardBackgroundLayer from "@dashboard/hoc/AdminDashboardBackgroundLayer";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const userId = searchParams.get("userId");

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { isLoading } = useSelector((state: RootState) => state.authReducer);

  const handleSubmit = async () => {
    if (!newPassword || !confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    if (!userId || !token) {
      toast.error("Something went wrong. Please try again!");
      return;
    }

    try {
      await dispatch(
        resetPassword({ userId, token, password: newPassword })
      ).unwrap();
      toast.success("Password reset successful!");
      navigate(generalRoutes.LOGIN);
    } catch (error: any) {
      toast.error(error?.message || "Failed to reset password");
    }
  };

  return (
    <AdminDashboardBackgroundLayer>
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl bg-white p-6 sm:p-10 rounded-xl shadow-lg relative sm:mx-auto">
        {isLoading && (
          <div className="absolute inset-0 bg-white bg-opacity-75 flex justify-center items-center rounded-xl z-10">
            <Spinner customStyle="w-16 h-16 animate-spin" />
          </div>
        )}

        <div className="flex flex-col items-center">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#bb8f324d] rounded-full flex justify-center items-center mb-4">
            <KeyIcon />
          </div>
          <span className="font-montserrat text-2xl sm:text-3xl font-bold mb-2 text-center">
            Reset Password
          </span>
          <span className="font-poppins text-center text-sm sm:text-base">
            Set your new password below.
          </span>

          <div className="flex flex-col w-full mt-4 space-y-4">
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="New Password"
                className="w-full border border-[#e1e1e1] rounded-2xl h-12 sm:h-14 p-2 px-4 pr-12 text-[#000] font-poppins"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                aria-label="Toggle password visibility"
              >
                <EyeIcon
                  color={showPassword ? "#000" : "#99a1af"}
                  width={22}
                  height={22}
                />
              </button>
            </div>

            <div className="relative w-full">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full border border-[#e1e1e1] rounded-2xl h-12 sm:h-14 p-2 px-4 pr-12 text-[#000] font-poppins"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                aria-label="Toggle confirm password visibility"
              >
                <EyeIcon
                  color={showConfirmPassword ? "#000" : "#99a1af"}
                  width={22}
                  height={22}
                />
              </button>
            </div>

            <button
              type="button"
              disabled={!newPassword || !confirmPassword || isLoading}
              onClick={handleSubmit}
              className={`${
                !newPassword || !confirmPassword || isLoading
                  ? "opacity-50 cursor-not-allowed"
                  : "cursor-pointer"
              } bg-gradient-to-r from-[#bb8f32] to-[#f6dc94] h-12 sm:h-14 w-full rounded-full text-white font-poppins font-bold text-lg flex justify-center items-center`}
            >
              Reset Password
            </button>

            <div
              className="text-[#bb8f32] font-bold font-poppins text-center text-sm sm:text-base cursor-pointer mt-4 flex justify-center items-center"
              onClick={() => navigate(generalRoutes.LOGIN)}
            >
              <span className="text-xl sm:text-2xl mr-2">&#8592;</span>
              <span>Back to Log In</span>
            </div>
          </div>
        </div>
      </div>
    </AdminDashboardBackgroundLayer>
  );
};

export default ResetPassword;
