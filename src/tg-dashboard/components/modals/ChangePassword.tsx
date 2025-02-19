import React from "react";
import CloseIcon from "@assets/svgs/CloseIcon";

interface ChangePasswordProps {
  closeModal: () => void;
}

const ChangePassword: React.FC<ChangePasswordProps> = ({ closeModal }) => {
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
              required
            />
          </div>
          <div className="w-full flex flex-col mb-2">
            <input
              name="new-input"
              type="password"
              className="block w-full p-3 my-1 ps-10 text-sm text-gray-900 border border-[#E1E1E1] rounded-full bg-[#F9F9F9]"
              placeholder="New Password"
              required
            />
          </div>
          <div className="w-full flex flex-col mb-2">
            <input
              name="confirm-input"
              type="password"
              className="block w-full p-3 my-1 ps-10 text-sm text-gray-900 border border-[#E1E1E1] rounded-full bg-[#F9F9F9]"
              placeholder="Confirm Password"
              required
            />
          </div>
          <span className="bg-[linear-gradient(274.47deg,#BB8F32_1.53%,#F6DC94_167.81%)] h-[40px] w-full rounded-full border-0 text-white font-poppins text-[16px] font-bold mt-6 cursor-pointer flex justify-center items-center text-center">
            Change Password
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
