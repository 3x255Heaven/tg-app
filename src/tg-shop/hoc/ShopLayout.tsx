import { ReactNode, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

import { AppDispatch, RootState } from "@store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  getFeaturedCourses,
  getPublicCourses,
  getUserCourses,
} from "@store/slices/courseSlice";
import { logoutRequest } from "@store/slices/authSlice";

import { languages } from "@constants/languages";
import { dashboardRoutes, generalRoutes } from "@routes";

import InstagramIcon from "@assets/svgs/icons/InstagramIcon";
import MailIcon from "@assets/svgs/icons/MailIcon";
import PhoneIcon from "@assets/svgs/icons/PhoneIcon";
import PrimaryLogo from "@assets/svgs/PrimaryLogo";
import TikTokIcon from "@assets/svgs/icons/TikTokIcon";
import brandImage from "@assets/brand/tg.png";
import MenuIcon from "@assets/svgs/icons/MenuIcon";
import Cart from "@shop/components/Cart";
import CartIcon from "@assets/svgs/icons/CartIcon";

import aikBank from "@assets/banks/aikbank.png";
import intesaBank from "@assets/banks/intesabank.png";
import nlbBank from "@assets/banks/nlbbank.png";
import otbBank from "@assets/banks/otpbank.svg";
import raiBank from "@assets/banks/raifaisenbank.svg";
import unicreditBank from "@assets/banks/unicreditbank.png";
import ipsBank from "@assets/banks/ips.svg";

import siq from "@assets/banks/siq.png";
import mcCheck from "@assets/banks/mccheck.png";
import visaSecure from "@assets/banks/visasecure.png";
import amEx from "@assets/banks/amex.png";
import visaAmEx from "@assets/banks/visaemex.png";
import mastercard1 from "@assets/banks/mc1.png";
import mastercard2 from "@assets/banks/mc2.png";

interface ShopLayoutProps {
  children?: ReactNode;
}

const ShopLayout: React.FC<ShopLayoutProps> = ({ children }) => {
  const { user, cart } = useSelector((state: RootState) => state.authReducer);

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLanguagePickerOpen, setLanguagePickerOpen] = useState(false);
  const [isCartActive, setIsCartActive] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setLanguagePickerOpen(false);
    }
  };

  useEffect(() => {
    dispatch(getPublicCourses());
    dispatch(getFeaturedCourses());

    if (user) {
      dispatch(getUserCourses(user._id));
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [user]);

  const handleLogout = async () => {
    try {
      await dispatch(logoutRequest()).unwrap();
      navigate(generalRoutes.LOGIN);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="flex flex-col items-center font-montserrat relative">
      <Cart
        isActive={isCartActive}
        closeCart={() => {
          setIsCartActive(false);
        }}
      />
      {isCartActive && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={() => setIsCartActive(false)}
        />
      )}
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
              <span
                className="cursor-pointer font-bold text-[#BB8F32] rounded-sm p-1.5"
                onClick={() => {
                  navigate(generalRoutes.HOME);
                }}
              >
                {t("home")}
              </span>
              <span
                className="cursor-pointer font-bold text-[#BB8F32] rounded-sm p-1.5"
                onClick={() => {
                  navigate(generalRoutes.COURSES);
                }}
              >
                {t("courses")}
              </span>
              <span
                className="cursor-pointer font-bold text-[#BB8F32] rounded-sm p-1.5"
                onClick={() => {
                  navigate(generalRoutes.CONTACT);
                }}
              >
                {t("contact")}
              </span>
              <div className="relative inline-block" ref={dropdownRef}>
                <button
                  onClick={() => {
                    setLanguagePickerOpen(!isLanguagePickerOpen);
                    setIsNavOpen(false);
                  }}
                  className="cursor-pointer flex justify-center items-center text-center"
                >
                  {i18n.language === "sr" ? (
                    <div className="border border-[#BB8F32] text-[#BB8F32] rounded-full p-1.5">
                      SR
                    </div>
                  ) : (
                    <div className="border border-[#BB8F32] text-[#BB8F32] rounded-full p-1.5">
                      EN
                    </div>
                  )}
                </button>
                {isLanguagePickerOpen && (
                  <div className="absolute top-[40px] left-[-14px] mt-2 w-18 border border-[#BB8F32] rounded-lg shadow-lg z-50">
                    <ul className="py-2 text-gray-700">
                      {Object.keys(languages).map((language: any) => {
                        return (
                          <li
                            key={language}
                            className="px-4 py-2 cursor-pointer"
                            onClick={() => {
                              i18n.changeLanguage(language);
                              setLanguagePickerOpen(false);
                            }}
                          >
                            {language === "sr" ? (
                              <div className="border hover:bg-[#BB8F32] hover:text-white border-[#BB8F32] text-[#BB8F32] rounded-full p-1.5">
                                SR
                              </div>
                            ) : (
                              <div className="border hover:bg-[#BB8F32] hover:text-white border-[#BB8F32] text-[#BB8F32] rounded-full p-1.5">
                                EN
                              </div>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
              {user && (
                <>
                  <div
                    className={`${
                      isCartActive ? "pointer-events-none" : ""
                    } relative border border-[#BB8F32] rounded-full p-1.5 cursor-pointer`}
                    onClick={() => {
                      setIsCartActive(true);
                    }}
                  >
                    <CartIcon />
                    {cart?.length > 0 && (
                      <span className="absolute -top-1 -right-1 bg-[#BB8F32] text-white text-xs font-bold rounded-full pt-0.5 w-6 h-6 flex items-center justify-center">
                        {cart.length}
                      </span>
                    )}
                  </div>
                  <div
                    className="rotate-180"
                    onClick={() => {
                      setIsNavOpen(!isNavOpen);
                      setLanguagePickerOpen(false);
                    }}
                  >
                    <MenuIcon />
                  </div>
                </>
              )}
              {!user && (
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

              {isNavOpen && (
                <div
                  className={`${
                    location.pathname === generalRoutes.HOME
                      ? "bg-transparent border border-[#BB8F32]"
                      : "bg-white"
                  } absolute top-[80px] right-[78px] mt-2 w-40 rounded-lg shadow-lg z-50`}
                >
                  <ul className="py-1">
                    <li
                      key={1}
                      className="px-4 py-2 cursor-pointer text-[#BB8F32] hover:bg-[#BB8F32] hover:text-white"
                      onClick={() => {
                        navigate(generalRoutes.MY_PROFILE);
                      }}
                    >
                      {t("my_profile")}
                    </li>
                    <li
                      key={2}
                      className="px-4 py-2 cursor-pointer text-[#BB8F32] hover:bg-[#BB8F32] hover:text-white"
                      onClick={() => {
                        navigate(generalRoutes.MY_COURSES);
                      }}
                    >
                      {t("my_courses")}
                    </li>
                    <li
                      key={3}
                      className="px-4 py-2 cursor-pointer text-[#BB8F32] hover:bg-[#BB8F32] hover:text-white"
                      onClick={() => {
                        navigate(generalRoutes.CHANGE_PASSWORD);
                      }}
                    >
                      {t("change_password")}
                    </li>
                    {user?.role === "admin" && (
                      <li
                        key={3}
                        className="px-4 py-2 cursor-pointer text-[#BB8F32] hover:bg-[#BB8F32] hover:text-white"
                        onClick={() => {
                          navigate(dashboardRoutes.DASHBOARD_OVERVIEW);
                        }}
                      >
                        {t("dashboard")}
                      </li>
                    )}
                    <li
                      key={4}
                      className="px-4 py-2 cursor-pointer text-[#BB8F32] hover:bg-[#BB8F32] hover:text-white"
                      onClick={() => {
                        handleLogout();
                      }}
                    >
                      {t("logout")}
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="xl:hidden flex justify-between items-center py-4 px-5 bg-[#231F20]">
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
              <span
                className="cursor-pointer"
                onClick={() => {
                  navigate(generalRoutes.HOME);
                }}
              >
                {t("home")}
              </span>
              <span
                className="cursor-pointer font-bold text-[#BB8F32] rounded-sm p-1.5"
                onClick={() => {
                  navigate(generalRoutes.CONTACT);
                }}
              >
                {t("contact")}
              </span>
              <span
                className="cursor-pointer"
                onClick={() => {
                  navigate(generalRoutes.COURSES);
                }}
              >
                {t("courses")}
              </span>
              <div className="relative inline-block" ref={dropdownRef}>
                <button
                  onClick={() => {
                    setLanguagePickerOpen(!isLanguagePickerOpen);
                    setIsNavOpen(false);
                  }}
                  className="bg-white cursor-pointer flex justify-center items-center text-center"
                >
                  {i18n.language === "sr" ? (
                    <div className="border border-[#BB8F32] text-[#BB8F32] rounded-full p-1.5">
                      SR
                    </div>
                  ) : (
                    <div className="border border-[#BB8F32] text-[#BB8F32] rounded-full p-1.5">
                      EN
                    </div>
                  )}
                </button>
                {isLanguagePickerOpen && (
                  <div className="absolute mt-2 w-18 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                    <ul className="py-2 text-gray-700">
                      {Object.keys(languages).map((language: any) => {
                        return (
                          <li
                            key={language}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => {
                              i18n.changeLanguage(language);
                              setLanguagePickerOpen(false);
                            }}
                          >
                            {language === "sr" ? (
                              <div className="border border-[#BB8F32] rounded-full p-1.5">
                                SR
                              </div>
                            ) : (
                              <div className="border border-[#BB8F32] rounded-full p-1.5">
                                EN
                              </div>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
              {user && (
                <>
                  <div
                    className={`${
                      isCartActive ? "pointer-events-none" : ""
                    } relative border border-[#BB8F32] rounded-full p-1.5 cursor-pointer`}
                    onClick={() => {
                      setIsCartActive(true);
                    }}
                  >
                    <CartIcon />
                    {cart?.length > 0 && (
                      <span className="absolute -top-1 -right-1 bg-[#BB8F32] text-white text-xs font-bold rounded-full pt-0.5 w-6 h-6 flex items-center justify-center">
                        {cart.length}
                      </span>
                    )}
                  </div>
                  <div className="bg-white flex flex-col text-center items-center mt-2 w-40 rounded-lg text-black">
                    <ul className="py-1">
                      <li
                        key={1}
                        className="px-4 py-2 cursor-pointer"
                        onClick={() => {
                          navigate(generalRoutes.MY_PROFILE);
                        }}
                      >
                        {t("my_profile")}
                      </li>
                      <li
                        key={2}
                        className="px-4 py-2 cursor-pointer"
                        onClick={() => {
                          navigate(generalRoutes.MY_COURSES);
                        }}
                      >
                        {t("my_courses")}
                      </li>
                      <li
                        key={3}
                        className="px-4 py-2 cursor-pointer"
                        onClick={() => {
                          navigate(generalRoutes.CHANGE_PASSWORD);
                        }}
                      >
                        {t("change_password")}
                      </li>
                      {user?.role === "admin" && (
                        <li
                          key={3}
                          className="px-4 py-2 cursor-pointer"
                          onClick={() => {
                            navigate(dashboardRoutes.DASHBOARD_OVERVIEW);
                          }}
                        >
                          {t("dashboard")}
                        </li>
                      )}
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
              )}
              {!user && (
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
      </div>
      {children}
      <div className="flex flex-col justify-between items-center px-5 sm:px-10 lg:px-20 py-12 w-full bg-[#231F20] relative z-30">
        <div className="flex w-full justify-between items-center pb-10 border-b border-white flex-col-reverse lg:flex-row">
          <div className="flex flex-col gap-6 w-full sm:w-auto text-white">
            <span className="text-xl font-semibold">PR TG Beauty</span>
            <div className="flex items-center gap-6">
              <MailIcon color="#FFF" />
              <span>teodora.grubor@gmail.com</span>
            </div>
            <div className="flex items-center gap-6">
              <InstagramIcon color="#FFF" />
              <span>teodora.makeup</span>
            </div>
            <div className="flex items-center gap-6">
              <TikTokIcon color="#FFF" />
              <span>Teodora Grubor</span>
            </div>
            <div className="flex items-center gap-6">
              <PhoneIcon color="#FFF" />
              <span>+381659805580</span>
            </div>
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            <div className="flex flex-col items-center gap-5 cursor-pointer">
              <PrimaryLogo
                width={100}
                height={120}
                customStyle="lg:mb-0 mb-10"
              />
              <div>
                <img
                  className="w-[216px] h-[10px] object-contain"
                  src={brandImage}
                  alt="Description"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 mt-10 sm:justify-start">
          <div className="flex justify-center items-center gap-10 flex-wrap">
            <img src={aikBank} alt="AIK" className="h-12" />
            <img src={intesaBank} alt="Intesa" className="h-12" />
            <img src={ipsBank} alt="IPS" className="h-12" />
            <img src={nlbBank} alt="NLB" className="h-12" />
            <img src={otbBank} alt="OTP" className="h-12" />
          </div>

          <div className="flex justify-center items-center gap-10 flex-wrap mt-10">
            <img src={raiBank} alt="RAi" className="h-12" />
            <img src={unicreditBank} alt="Unicredit" className="h-32" />
          </div>

          <div className="flex justify-center items-center gap-10 flex-wrap mt-10">
            <img src={siq} alt="RAi" className="h-12" />
            <img src={mcCheck} alt="Unicredit" className="h-12" />
            <img src={visaSecure} alt="RAi" className="h-12" />
            <img src={amEx} alt="Unicredit" className="h-12" />
            <img src={visaAmEx} alt="Unicredit" className="h-12" />
            <img src={mastercard1} alt="RAi" className="h-12" />
            <img src={mastercard2} alt="Unicredit" className="h-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopLayout;
