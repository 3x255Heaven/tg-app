import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "@store/store";

import PrimaryLogo from "@assets/svgs/PrimaryLogo";
import { generalRoutes } from "@routes";
import LanguagePicker from "../LanguagePicker";
import { Cart } from "../cart/Cart";
import UserNavigation from "./UserNavigation";
import MobileNavigation from "./MobileNavigation";

import brandImage from "@assets/brand/tg.png";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const GENERAL_NAVIGATION_ITEMS = [
    { name: t("home"), route: generalRoutes.HOME },
    { name: t("contact"), route: generalRoutes.CONTACT },
    { name: t("courses"), route: generalRoutes.COURSES },
  ];

  const { user } = useSelector((state: RootState) => state.authReducer);

  return (
    <>
      <div className="w-full relative z-30">
        <div className="hidden xl:flex flex-col items-center">
          <div
            className={`${
              location.pathname === generalRoutes.HOME
                ? "bg-transparent absolute"
                : "bg-white"
            } flex justify-between items-center py-4 px-20 w-full bg-transparent absolute z-10 shadow-[0px_4px_21.9px_0px_#00000012]`}
          >
            <div
              className="flex flex-col items-center gap-5 cursor-pointer"
              onClick={() => {
                navigate("/");
              }}
            >
              <PrimaryLogo width={38} height={50} />
              <div>
                <img
                  className="w-[216px] h-[10px] object-contain"
                  src={brandImage}
                  alt="Description"
                />
              </div>
            </div>
            <div className="flex items-center gap-6">
              {GENERAL_NAVIGATION_ITEMS.map((navItem, index) => {
                return (
                  <span
                    key={index}
                    className="cursor-pointer font-bold text-[#BB8F32] rounded-sm p-1.5"
                    onClick={() => {
                      navigate(navItem.route);
                    }}
                  >
                    {navItem.name}
                  </span>
                );
              })}

              <LanguagePicker />

              {user ? (
                <>
                  <Cart />
                  <UserNavigation />
                </>
              ) : (
                <>
                  <span
                    className="bg-[linear-gradient(274.47deg,#BB8F32_1.53%,#F6DC94_167.81%)] px-5 py-1.5 rounded-full border-0 text-white font-poppins text-[16px] cursor-pointer flex justify-center items-center text-center"
                    onClick={() => {
                      navigate(generalRoutes.LOGIN);
                    }}
                  >
                    {t("login")}
                  </span>
                  <span
                    className="bg-white px-5 py-1.5 rounded-full border border-[#BB8F32] text-[#BB8F32] font-poppins text-[16px] cursor-pointer flex justify-center items-center text-center"
                    onClick={() => {
                      navigate(generalRoutes.REGISTER);
                    }}
                  >
                    {t("register")}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <MobileNavigation user={user} />
    </>
  );
};

export default Navigation;
