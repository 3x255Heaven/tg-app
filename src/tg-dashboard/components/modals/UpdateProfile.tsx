import React, { useState, useEffect } from "react";
import CloseIcon from "@assets/svgs/icons/CloseIcon";
import { RootState } from "@store/store";
import { useDispatch, useSelector } from "react-redux";
import { UserAvatar } from "../UserAvatar";
import { AppDispatch } from "@store/store";
import { updateProfile } from "@store/slices/authSlice";

interface UpdateProfileProps {
  closeModal: () => void;
}

const UpdateProfile: React.FC<UpdateProfileProps> = ({ closeModal }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, isLoading } = useSelector(
    (state: RootState) => state.authReducer
  );

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(name !== user?.name || email !== user?.email);
  }, [name, email, user]);

  const handleSubmit = async () => {
    if (!isValid || !user?._id) return;

    await dispatch(updateProfile({ userId: user._id, name, email }));
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
            Update Profile
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

        <div className="pb-4 pr-4 pl-4 flex flex-col justify-center items-center">
          <div className="mb-2 flex flex-col justify-center items-center">
            <div className="text-[#BB8F32]">
              <UserAvatar name={user.name} width={"w-30"} height={"h-30"} />
            </div>
            <span className="bg-[linear-gradient(274.47deg,#BB8F32_1.53%,#F6DC94_167.81%)] h-[24px] w-[140px] rounded-full border-0 text-white font-poppins text-[14px] mt-6 cursor-pointer flex justify-center items-center text-center">
              Change Image
            </span>
          </div>

          <div className="w-full flex flex-col mb-2">
            <span className="text-[#BB8F32] font-[600]">Full Name</span>
            <input
              name="name-input"
              type="text"
              className="block w-full p-3 my-1 ps-10 text-sm text-gray-900 border border-[#BB8F32] rounded-full bg-gray-50"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="w-full flex flex-col mb-2">
            <span className="text-[#BB8F32] font-[600]">Email Address</span>
            <input
              name="email-input"
              type="text"
              className="block w-full p-3 my-1 ps-10 text-sm text-gray-900 border border-[#BB8F32] rounded-full bg-gray-50"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button
            className={`h-[40px] w-full rounded-full border-0 text-white font-poppins text-[16px] font-bold mt-6 flex justify-center items-center text-center ${
              isValid
                ? "bg-[linear-gradient(274.47deg,#BB8F32_1.53%,#F6DC94_167.81%)] cursor-pointer"
                : "bg-gray-300 cursor-not-allowed"
            }`}
            disabled={!isValid || isLoading}
            onClick={handleSubmit}
          >
            {isLoading ? "Updating..." : "Update Profile"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
