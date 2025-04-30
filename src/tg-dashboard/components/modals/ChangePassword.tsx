import React, { useState, useEffect } from "react";
import CloseIcon from "@assets/svgs/icons/CloseIcon";
import { AppDispatch, RootState } from "@store/store";
import { changePassword } from "@store/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";

interface ChangePasswordProps {
  closeModal: () => void;
}

const ChangePassword: React.FC<ChangePasswordProps> = ({ closeModal }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.authReducer);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const valid =
      !!oldPassword &&
      !!newPassword &&
      newPassword === confirmPassword &&
      newPassword.length >= 6;

    setIsValid(valid);
  }, [oldPassword, newPassword, confirmPassword]);

  const handleSubmit = async () => {
    if (!isValid) return;

    setIsLoading(true);
    await dispatch(
      changePassword({ userId: user._id, oldPassword, newPassword })
    );
    setIsLoading(false);
    closeModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={closeModal}
      />

      <div className="relative p-4 w-full max-w-md max-h-full bg-white rounded-[20px] shadow-sm z-10">
        <div className="flex items-center justify-between p-4 rounded-t">
          <h3 className="text-lg font-semibold text-gray-900">
            Change Password
          </h3>
          <button
            type="button"
            className="text-gray-400 bg-transparent cursor-pointer rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
          >
            <div
              className="border flex justify-center items-center p-2 rounded-full ml-2"
              onClick={closeModal}
            >
              <CloseIcon color="#101828" />
            </div>
          </button>
        </div>

        <div className="p-4 flex flex-col justify-center items-center">
          <div className="w-full flex flex-col mb-2">
            <input
              name="old-input"
              type="password"
              className="block w-full p-3 my-1 ps-10 text-sm text-gray-900 border border-[#E1E1E1] rounded-full bg-[#F9F9F9]"
              placeholder="Old Password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
            />
          </div>
          <div className="w-full flex flex-col mb-2">
            <input
              name="new-input"
              type="password"
              className="block w-full p-3 my-1 ps-10 text-sm text-gray-900 border border-[#E1E1E1] rounded-full bg-[#F9F9F9]"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="w-full flex flex-col mb-2">
            <input
              name="confirm-input"
              type="password"
              className="block w-full p-3 my-1 ps-10 text-sm text-gray-900 border border-[#E1E1E1] rounded-full bg-[#F9F9F9]"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={!isValid || isLoading}
            className={`h-[40px] w-full rounded-full text-white font-poppins text-[16px] font-bold mt-6 flex justify-center items-center text-center ${
              isValid
                ? "bg-[linear-gradient(274.47deg,#BB8F32_1.53%,#F6DC94_167.81%)] cursor-pointer"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            {isLoading ? "Changing..." : "Change Password"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
