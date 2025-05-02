import { useState } from "react";
import { useTranslation } from "react-i18next";
import ShopLayout from "@shop/hoc/ShopLayout";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/store";
import { changePassword } from "@store/slices/authSlice";
import { generalRoutes } from "@routes";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.authReducer);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async () => {
    if (!oldPassword || !newPassword || !confirmPassword) {
      toast.error("All fields are required.");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Password do not match.");
      return;
    }

    await dispatch(
      changePassword({ userId: user._id, oldPassword, newPassword })
    );
    toast.success("Password changed.");
    navigate(generalRoutes.HOME);
  };

  return (
    <ShopLayout>
      <div className="w-full min-h-[60vh] flex flex-col justify-center items-center p-4 sm:p-6 md:p-10 mt-15 mb-5">
        <div className="w-full flex flex-col justify-center items-center">
          <span className="font-malayalam text-2xl sm:text-3xl md:text-5xl text-[#251D18] [text-shadow:0px_4px_5.3px_#BB8F3259]">
            {t("change_password")}
          </span>
        </div>

        <div className="p-6 sm:p-8 w-full max-w-[90%] md:max-w-[50%] flex flex-col justify-center items-center shadow-md rounded-lg mt-6">
          <input
            type="password"
            name="oldPassword"
            placeholder={t("old_password")}
            className="block w-full p-3 text-sm text-gray-900 border border-[#E1E1E1] rounded-full bg-[#F9F9F9] mb-2"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            required
          />
          <input
            type="password"
            name="newPassword"
            placeholder={t("new_password")}
            className="block w-full p-3 text-sm text-gray-900 border border-[#E1E1E1] rounded-full bg-[#F9F9F9] mb-2"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder={t("confirm_password")}
            className="block w-full p-3 text-sm text-gray-900 border border-[#E1E1E1] rounded-full bg-[#F9F9F9] mb-2"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button
            onClick={handleSubmit}
            className="bg-[linear-gradient(274.47deg,#BB8F32_1.53%,#F6DC94_167.81%)] h-[48px] w-full rounded-full text-white font-poppins text-[16px] font-bold mt-4 cursor-pointer flex justify-center items-center"
          >
            {t("change_password")}
          </button>
        </div>
      </div>
    </ShopLayout>
  );
};

export default ChangePassword;
