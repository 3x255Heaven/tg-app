import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@store/store";
import { logoutRequest } from "@store/slices/authSlice";

import MenuIcon from "@assets/svgs/icons/MenuIcon";
import { generalRoutes } from "@routes";

const UserNavigation = () => {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const USER_NAVIGATION_ITEMS = [
    { name: t("my_profile"), route: generalRoutes.MY_PROFILE },
    { name: t("my_courses"), route: generalRoutes.MY_COURSES },
    { name: t("change_password"), route: generalRoutes.CHANGE_PASSWORD },
  ];

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsNavOpen(false);
    }
  };

  const handleLogout = async () => {
    try {
      await dispatch(logoutRequest()).unwrap();
      navigate(generalRoutes.LOGIN);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef}>
      <div
        className="rotate-180"
        onClick={() => {
          setIsNavOpen(!isNavOpen);
        }}
      >
        <MenuIcon />
      </div>

      {isNavOpen && (
        <div
          className={`${
            location.pathname === generalRoutes.HOME
              ? "bg-transparent border border-[#BB8F32]"
              : "bg-white"
          } absolute top-[80px] right-[78px] mt-2 w-40 rounded-lg shadow-lg z-50`}
        >
          <ul className="py-1">
            {USER_NAVIGATION_ITEMS.map((navItem, index) => {
              return (
                <li
                  key={index}
                  className="px-4 py-2 cursor-pointer text-[#BB8F32] hover:bg-[#BB8F32] hover:text-white"
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
  );
};

export default UserNavigation;
