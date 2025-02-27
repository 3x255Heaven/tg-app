import { ReactNode, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import InstagramIcon from "@assets/svgs/InstagramIcon";
import MailIcon from "@assets/svgs/MailIcon";
import PhoneIcon from "@assets/svgs/PhoneIcon";
import PrimaryLogo from "@assets/svgs/PrimaryLogo";
import TikTokIcon from "@assets/svgs/TikTokIcon";
import YoutubeIcon from "@assets/svgs/YoutubeIcon";
import brandImage from "@assets/tg.png";
import LocationIcon from "@assets/svgs/LocationIcon";
import MenuIcon from "@assets/svgs/MenuIcon";
import { languages } from "@constants/languages";

import serbianFlag from "@assets/rs.png";
import americanFlag from "@assets/en.png";

interface ShopLayoutProps {
  children?: ReactNode;
}

const ShopLayout: React.FC<ShopLayoutProps> = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLanguagePickerOpen, setLanguagePickerOpen] = useState(false);
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
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col items-center font-montserrat">
      <div className="w-full">
        <div className="hidden xl:flex flex-col items-center">
          <div className="flex justify-between items-center py-4 px-20 w-full h-14 bg-[#231F20]">
            <div className="flex">
              <div className="w-full flex justify-center items-center px-4 pl-0">
                <PhoneIcon />
                <span className="text-white ml-2 text-sm">+381647435987</span>
              </div>
              <div className="w-full flex justify-center items-center border-l border-white px-4">
                <MailIcon width={20} height={20} />
                <span className="text-white ml-2 text-sm">
                  teodoragrubor@gmail.com
                </span>
              </div>
            </div>
            <div className="flex gap-4">
              <TikTokIcon customStyle="cursor-pointer" />
              <InstagramIcon customStyle="cursor-pointer" />
              <YoutubeIcon customStyle="cursor-pointer" />
            </div>
          </div>
          <div className="flex justify-between items-center py-4 px-20 w-full bg-white shadow-[0px_4px_21.9px_0px_#00000012]">
            <div className="flex items-center gap-5">
              <PrimaryLogo width={38} height={50} />
              <div>
                <img
                  className="w-[316px] h-[20px]"
                  src={brandImage}
                  alt="Description"
                />
              </div>
            </div>
            <div className="flex items-center gap-6">
              <span className="cursor-pointer">{t("home")}</span>
              <span className="cursor-pointer">{t("courses")}</span>
              <span className="cursor-pointer">{t("contact")}</span>
              <div className="relative inline-block" ref={dropdownRef}>
                <button
                  onClick={() => {
                    setLanguagePickerOpen(!isLanguagePickerOpen);
                  }}
                  className="bg-white cursor-pointer flex justify-center items-center text-center"
                >
                  {i18n.language === "sr" ? (
                    <img
                      src={serbianFlag}
                      alt="Flag"
                      className="w-8  object-cover"
                    />
                  ) : (
                    <img
                      src={americanFlag}
                      alt="Flag"
                      className="w-8 object-cover"
                    />
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
                              <img
                                src={serbianFlag}
                                alt="Flag"
                                className="w-8  object-cover"
                              />
                            ) : (
                              <img
                                src={americanFlag}
                                alt="Flag"
                                className="w-8 object-cover"
                              />
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
              <span className="bg-[linear-gradient(274.47deg,#BB8F32_1.53%,#F6DC94_167.81%)] px-5 py-1.5 rounded-full border-0 text-white font-poppins text-[16px] cursor-pointer flex justify-center items-center text-center">
                {t("login")}
              </span>
              <span className="bg-white px-5 py-1.5 rounded-full border border-[#BB8F32] text-[#BB8F32] font-poppins text-[16px] cursor-pointer flex justify-center items-center text-center">
                {t("register")}
              </span>
            </div>
          </div>
        </div>

        <div className="xl:hidden flex justify-between items-center py-4 px-5 bg-[#231F20]">
          <div className="flex w-full justify-between items-center">
            <button onClick={() => setIsNavOpen(!isNavOpen)}>
              <MenuIcon />
            </button>
            <div className="flex items-center gap-4 mr-4">
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

        {isNavOpen && (
          <div className="xl:hidden bg-white py-4">
            <div className="flex flex-col items-center gap-6">
              <span className="cursor-pointer">{t("home")}</span>
              <span className="cursor-pointer">{t("courses")}</span>
              <span className="cursor-pointer">{t("contact")}</span>
              <span className="bg-[linear-gradient(274.47deg,#BB8F32_1.53%,#F6DC94_167.81%)] h-[2rem] w-[6rem] rounded-full border-0 text-white font-poppins text-[16px] cursor-pointer flex justify-center items-center text-center">
                {t("login")}
              </span>
              <span className="bg-white h-[2rem] w-[6rem] rounded-full border border-[#BB8F32] text-[#BB8F32] font-poppins text-[16px] cursor-pointer flex justify-center items-center text-center">
                {t("register")}
              </span>
            </div>
          </div>
        )}
      </div>
      {children}
      <div className="flex flex-col justify-between items-center px-5 sm:px-10 lg:px-20 py-12 w-full bg-[#231F20]">
        <div className="flex w-full justify-between items-center pb-10 border-b border-white flex-col-reverse lg:flex-row">
          <div className="flex flex-col gap-6 w-full sm:w-auto">
            <div className="flex items-center gap-6">
              <LocationIcon color="#FFF" />
              <span className="text-white">Bate Brkica 11, Novi Sad</span>
            </div>
            <div className="flex items-center gap-6">
              <MailIcon color="#FFF" />
              <span className="text-white">teodora.grubor@gmail.com</span>
            </div>
            <div className="flex items-center gap-6">
              <PhoneIcon color="#FFF" />
              <span className="text-white">+381649843948</span>
            </div>
          </div>
          <PrimaryLogo width={100} height={120} customStyle="lg:mb-0 mb-10" />
        </div>
        <div className="flex justify-center items-center gap-10 mt-10 flex-wrap sm:justify-start">
          <TikTokIcon color="#FFF" customStyle="cursor-pointer" />
          <InstagramIcon color="#FFF" customStyle="cursor-pointer" />
          <YoutubeIcon color="#FFF" customStyle="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ShopLayout;
