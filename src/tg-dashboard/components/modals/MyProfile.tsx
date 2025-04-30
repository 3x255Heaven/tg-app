import React from "react";
import CloseIcon from "@assets/svgs/icons/CloseIcon";
import { useSelector } from "react-redux";
import { RootState } from "@store/store";
import { UserAvatar } from "../UserAvatar";

interface MyProfileProps {
  closeModal: () => void;
}

const MyProfile: React.FC<MyProfileProps> = ({ closeModal }) => {
  const { user } = useSelector((state: RootState) => state.authReducer);

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={closeModal}
      />

      <div className="relative p-4 w-full max-w-md max-h-full bg-white rounded-[20px] shadow-sm z-10">
        <div className="flex items-center justify-between p-4 rounded-t">
          <h3 className="text-lg font-semibold text-gray-900">My Profile</h3>
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

        <div className="pb-4 pr-4 pl-4 flex flex-col justify-center items-center">
          <div className="mb-6 text-[#BB8F32]">
            <UserAvatar name={user.name} width={"w-30"} height={"h-30"} />
          </div>
          <div className="w-full flex justify-between mb-2">
            <span className="text-[#394B87]">Full Name</span>
            <span>{user.name}</span>
          </div>
          <div className="w-full flex justify-between">
            <span className="text-[#394B87]">Email Address</span>
            <span>{user.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
