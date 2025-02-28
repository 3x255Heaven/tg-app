import React from "react";
import CloseIcon from "@assets/svgs/icons/CloseIcon";

interface MyProfileProps {
  closeModal: () => void;
}

const MyProfile: React.FC<MyProfileProps> = ({ closeModal }) => {
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
          <div className="mb-6">
            <img
              className="w-28 h-28 rounded-full object-cover"
              src="https://s3-alpha-sig.figma.com/img/590c/5619/14379f2474bbc8a4787f2ade0777c52b?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cAzHFgeqTo3j~u9sflBpztP7kuAtJgYu1KHjCT8SG5iXwrPJY0nLPfaa3b2Mqhi~D~8QAdcoc0fBVzqpUH3DAfzpsdnbmTvIt4VOlvHGlJGBAzaKUODnqfoy5zwBgCibCdXSQq7XfleoM4URfFE24l9j-wHgq0gEfi87f4W1NTQSv4zlw~FxEicW95CdZEvytnw~3h8IrANHB7-Egzv7ui-wZIeiqwqEcNxXEWULtS4b4AjLBfLw5SUeYe9c~mWOEPUywWPhaX3R3fw9nuE6ypScbsKHNApy3K38SkSY-kd3QtRH9sqFW5r-1UI-xBWdjCaBIXnn7z3v~Hkvlp2ejw__"
              alt="user photo"
            />
          </div>
          <div className="w-full flex justify-between mb-2">
            <span className="text-[#394B87]">Full Name</span>
            <span>Teodora Grubor</span>
          </div>
          <div className="w-full flex justify-between">
            <span className="text-[#394B87]">Email Address</span>
            <span>teodoragrubor@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
