import { useTranslation } from "react-i18next";
import ShopLayout from "@shop/hoc/ShopLayout";

const MyProfile = () => {
  const { t } = useTranslation();

  return (
    <ShopLayout>
      <div className="w-full flex flex-col justify-center items-center p-4 sm:p-6 md:p-10 mt-5 mb-5">
        <div className="w-full flex flex-col justify-center items-center">
          <span className="font-malayalam text-2xl sm:text-3xl md:text-5xl text-[#251D18] [text-shadow:0px_4px_5.3px_#BB8F3259]">
            {t("my_profile")}
          </span>
        </div>

        <div className="w-full flex flex-col justify-center items-center p-1 gap-6 md:gap-10 mt-6">
          <div className="p-6 sm:p-8 w-full max-w-[90%] md:max-w-[50%] flex flex-col justify-center items-center shadow-md rounded-lg">
            <div className="w-full flex flex-col mb-2">
              <input
                name="old-input"
                type="password"
                className="block w-full p-3 text-sm text-gray-900 border border-[#E1E1E1] rounded-full bg-[#F9F9F9]"
                placeholder={t("old_password")}
                required
              />
            </div>
            <div className="w-full flex flex-col mb-2">
              <input
                name="new-input"
                type="password"
                className="block w-full p-3 text-sm text-gray-900 border border-[#E1E1E1] rounded-full bg-[#F9F9F9]"
                placeholder={t("new_password")}
                required
              />
            </div>
            <div className="w-full flex flex-col mb-2">
              <input
                name="confirm-input"
                type="password"
                className="block w-full p-3 text-sm text-gray-900 border border-[#E1E1E1] rounded-full bg-[#F9F9F9]"
                placeholder={t("confirm_password")}
                required
              />
            </div>
            <button className="bg-[linear-gradient(274.47deg,#BB8F32_1.53%,#F6DC94_167.81%)] h-[48px] w-full rounded-full text-white font-poppins text-[16px] font-bold mt-4 cursor-pointer flex justify-center items-center">
              {t("change_password")}
            </button>
          </div>
          <div className="p-6 sm:p-8 w-full max-w-[90%] md:max-w-[50%] flex flex-col justify-center items-center shadow-md rounded-lg">
            <div className="w-full flex flex-col sm:flex-row gap-4 mb-2">
              <input
                name="first_name"
                type="text"
                className="block w-full p-3 text-sm text-gray-900 border border-[#E1E1E1] rounded-full bg-[#F9F9F9]"
                placeholder={t("first_name")}
                required
              />
              <input
                name="last_name"
                type="text"
                className="block w-full p-3 text-sm text-gray-900 border border-[#E1E1E1] rounded-full bg-[#F9F9F9]"
                placeholder={t("last_name")}
                required
              />
            </div>
            <div className="w-full flex flex-col mb-2">
              <input
                name="email"
                type="email"
                className="block w-full p-3 text-sm text-gray-900 border border-[#E1E1E1] rounded-full bg-[#F9F9F9]"
                placeholder={t("email")}
                required
              />
            </div>
            <button className="bg-[linear-gradient(274.47deg,#BB8F32_1.53%,#F6DC94_167.81%)] h-[48px] w-full rounded-full text-white font-poppins text-[16px] font-bold mt-4 cursor-pointer flex justify-center items-center">
              {t("update")}
            </button>
          </div>
        </div>
      </div>
    </ShopLayout>
  );
};

export default MyProfile;
