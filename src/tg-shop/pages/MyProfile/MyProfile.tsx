import { useTranslation } from "react-i18next";
import ShopLayout from "@shop/hoc/ShopLayout";

const MyProfile = () => {
  const { t } = useTranslation();

  return (
    <ShopLayout>
      <div className="w-full flex flex-col justify-center items-center p-6 sm:p-10 mt-5 mb-5">
        <div className="w-full flex flex-col justify-center items-center">
          <span className="font-malayalam text-3xl sm:text-4xl md:text-5xl text-[#251D18] [text-shadow:0px_4px_5.3px_#BB8F3259]">
            {t("my_profile")}
          </span>
        </div>
        <div className="w-full flex flex-col justify-center items-center p-1 gap-10 mt-10">
          <div className="p-8 w-1/2 flex flex-col justify-center items-center shadow-md rounded-lg">
            <div className="w-full flex flex-col mb-2">
              <input
                name="old-input"
                type="password"
                className="block w-full p-3 my-1 ps-10 text-sm text-gray-900 border border-[#E1E1E1] rounded-full bg-[#F9F9F9]"
                placeholder={t("old_password")}
                required
              />
            </div>
            <div className="w-full flex flex-col mb-2">
              <input
                name="new-input"
                type="password"
                className="block w-full p-3 my-1 ps-10 text-sm text-gray-900 border border-[#E1E1E1] rounded-full bg-[#F9F9F9]"
                placeholder={t("new_password")}
                required
              />
            </div>
            <div className="w-full flex flex-col mb-2">
              <input
                name="confirm-input"
                type="password"
                className="block w-full p-3 my-1 ps-10 text-sm text-gray-900 border border-[#E1E1E1] rounded-full bg-[#F9F9F9]"
                placeholder={t("confirm_password")}
                required
              />
            </div>
            <span className="bg-[linear-gradient(274.47deg,#BB8F32_1.53%,#F6DC94_167.81%)] h-[40px] w-full rounded-full border-0 text-white font-poppins text-[16px] font-bold mt-6 cursor-pointer flex justify-center items-center text-center">
              {t("change_password")}
            </span>
          </div>

          <div className="p-8 w-1/2 flex flex-col justify-center items-center shadow-md rounded-lg">
            <div className="w-full flex mb-2 gap-4">
              <input
                name="old-input"
                type="text"
                className="block w-full p-3 my-1 ps-10 text-sm text-gray-900 border border-[#E1E1E1] rounded-full bg-[#F9F9F9]"
                placeholder={t("first_name")}
                required
              />
              <input
                name="new-input"
                type="text"
                className="block w-full p-3 my-1 ps-10 text-sm text-gray-900 border border-[#E1E1E1] rounded-full bg-[#F9F9F9]"
                placeholder={t("last_name")}
                required
              />
            </div>
            <div className="w-full flex flex-col mb-2">
              <input
                name="confirm-input"
                type="text"
                className="block w-full p-3 my-1 ps-10 text-sm text-gray-900 border border-[#E1E1E1] rounded-full bg-[#F9F9F9]"
                placeholder={t("email")}
                required
              />
            </div>
            <span className="bg-[linear-gradient(274.47deg,#BB8F32_1.53%,#F6DC94_167.81%)] h-[40px] w-full rounded-full border-0 text-white font-poppins text-[16px] font-bold mt-6 cursor-pointer flex justify-center items-center text-center">
              {t("update")}
            </span>
          </div>
        </div>
      </div>
    </ShopLayout>
  );
};

export default MyProfile;
