import React from "react";
import LogoutReverseIcon from "@assets/svgs/LogoutReverseIcon";

interface LogoutProps {
  closeModal: () => void;
}

const Logout: React.FC<LogoutProps> = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={closeModal}
      />

      <div className="relative p-4 w-full max-w-md max-h-full bg-white rounded-[20px] shadow-sm z-10">
        <div className="p-4">
          <div className="w-full flex justify-center items-center">
            <div className="rounded-full bg-[#BB8F32] w-fit p-4">
              <LogoutReverseIcon color="#FFF" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center my-6">
            <span className="text-[#BB8F32] text-3xl">Logout?</span>
            <span className="mt-2">Are you sure you want to logout?</span>
          </div>
          <div className="w-full flex justify-around items-center">
            <span
              className="text-[#BB8F32] border border-[#BB8F32] rounded-full  h-[32px] w-fit px-14 py-5 cursor-pointer flex justify-center items-center text-center"
              onClick={closeModal}
            >
              Cancel
            </span>
            <span className="bg-[linear-gradient(274.47deg,#BB8F32_1.53%,#F6DC94_167.81%)] h-[32px] w-fit px-14 py-5 rounded-full border-0 text-white font-poppins text-[16px] cursor-pointer flex justify-center items-center text-center">
              Logout
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
