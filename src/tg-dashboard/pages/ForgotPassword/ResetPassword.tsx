import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@store/store";
import { resetPassword } from "@store/slices/authSlice";
import { toast } from "react-toastify";
import { generalRoutes } from "@routes";

import KeyIcon from "@assets/svgs/icons/KeyIcon";
import EyeIcon from "@assets/svgs/icons/EyeIcon";
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
      <div className="w-[488px] rounded-[12px] shadow-[0px_4px_30px_0px_#00000026] bg-white p-[2rem] flex flex-col items-center">
        <div className="w-[50px] h-[50px] bg-[#bb8f324d] rounded-full flex justify-center items-center mb-4">
          <KeyIcon />
        </div>
        <span className="font-montserrat text-[30px] font-bold leading-[43px] tracking-[0.04em]">
          Reset Password
        </span>
        <span className="font-poppins">Set your new password below.</span>
        <div className="flex flex-col items-center justify-center mt-4 w-full p-4 pt-0 pb-0">
          <div className="relative w-full mb-6">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="New Password"
              className="w-full border border-[#e1e1e1] rounded-[2rem] h-[3rem] p-2 px-4 text-[#000] font-poppins pr-12"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              aria-label="Toggle password visibility"
            >
              <EyeIcon
                color={showPassword ? "#000" : "#99a1af"}
                width={22}
                height={22}
              />
            </button>
          </div>

          <div className="relative w-full mb-6">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full border border-[#e1e1e1] rounded-[2rem] h-[3rem] p-2 px-4 text-[#000] font-poppins pr-12"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              aria-label="Toggle confirm password visibility"
            >
              <EyeIcon
                color={showConfirmPassword ? "#000" : "#99a1af"}
                width={22}
                height={22}
              />
            </button>
          </div>

          <span
            className={`${
              newPassword && confirmPassword
                ? "cursor-pointer opacity-100"
                : "cursor-not-allowed opacity-50"
            } bg-gradient-to-r from-[#bb8f32] to-[#f6dc94] h-[45px] w-full rounded-full border-0 text-white font-poppins text-[18px] font-bold mt-4 flex justify-center items-center`}
            onClick={handleSubmit}
          >
            Reset Password
          </span>

          <div
            className="text-[#bb8f32] font-bold font-poppins self-center text-[18px] cursor-pointer flex justify-center items-center mt-6"
            onClick={() => navigate(generalRoutes.LOGIN)}
          >
            <span className="text-[32px] h-[53px] mr-2">&#8592;</span>
            <span>Back to Log In</span>
          </div>
        </div>
      </div>
    </AdminDashboardBackgroundLayer>
  );
};

export default ResetPassword;
