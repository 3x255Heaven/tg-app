import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { AppDispatch } from "@store/store";
import { logoutRequest } from "@store/slices/authSlice";
import { generalRoutes } from "@routes";

import MenuIcon from "@assets/svgs/icons/MenuIcon";
import PrimaryLogo from "@assets/svgs/PrimaryLogo";
import brandImage from "@assets/brand/tg.png";

import LanguagePicker from "../LanguagePicker";
import { Cart } from "../cart/Cart";

const MobileNavigation = ({ user }: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const GENERAL_NAVIGATION_ITEMS = [
    { name: t("home"), route: generalRoutes.HOME },
    { name: t("contact"), route: generalRoutes.CONTACT },
    { name: t("courses"), route: generalRoutes.COURSES },
  ];

  const USER_NAVIGATION_ITEMS = [
    { name: t("my_profile"), route: generalRoutes.MY_PROFILE },
    { name: t("my_courses"), route: generalRoutes.MY_COURSES },
    { name: t("change_password"), route: generalRoutes.CHANGE_PASSWORD },
  ];

  const handleLogout = async () => {
    try {
      await dispatch(logoutRequest()).unwrap();
      navigate(generalRoutes.LOGIN);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <>
      <div className="xl:hidden w-full flex justify-between items-center py-4 px-5 bg-[#231F20]">
        <div className="flex w-full justify-between items-center">
          <button onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
            <MenuIcon />
          </button>
          <div
            className="flex items-center gap-4 mr-4 cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            <PrimaryLogo width={38} height={50} />
            <div>
              <img
                className="w-[256px] h-[16px]"
                src={brandImage}
                alt="Description"
              />
            </div>
          </div>
        </div>
      </div>

      {isMobileNavOpen && (
        <div className="xl:hidden bg-white py-4">
          <div className="flex flex-col items-center gap-6">
            {GENERAL_NAVIGATION_ITEMS.map((navItem, index) => {
              return (
                <span
                  key={index}
                  className="cursor-pointer"
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
                <div className="bg-white flex flex-col text-center items-center mt-2 w-40 rounded-lg text-black">
                  <ul className="py-1">
                    {USER_NAVIGATION_ITEMS.map((navItem, index) => {
                      return (
                        <li
                          key={index}
                          className="px-4 py-2 cursor-pointer"
                          onClick={() => {
                            navigate(navItem.route);
                          }}
                        >
                          {navItem.name}
                        </li>
                      );
                    })}
                    <li
                      key={4}
                      className="px-4 py-2 cursor-pointer"
                      onClick={() => {
                        handleLogout();
                      }}
                    >
                      {t("logout")}
                    </li>
                  </ul>
                </div>
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
      )}
    </>
  );
};

export default MobileNavigation;
