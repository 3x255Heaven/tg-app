import { ReactNode, ComponentType, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import DashboardIcon from "@assets/svgs/DashboardIcon";
import ManageCoursesIcon from "@assets/svgs/ManageCoursesIcon";
import WalletIcon from "@assets/svgs/WalletIcon";
import PrimaryLogo from "@assets/svgs/PrimaryLogo";
import SearchIcon from "@assets/svgs/SearchIcon";
import ArrowDownIcon from "@assets/svgs/ArrowDownIcon";
import MyProfileIcon from "@assets/svgs/MyProfileIcon";
import LockIcon from "@assets/svgs/LockIcon";
import PenIcon from "@assets/svgs/PenIcon";
import LogoutIcon from "@assets/svgs/LogoutIcon";
import NotificationIcon from "@assets/svgs/NotificationIcon";
import TermsAndConditionsIcon from "@assets/svgs/TermsAndConditionsIcon";
import PrivacyPolicyIcon from "@assets/svgs/PrivacyPolicyIcon";

import { dashboardRoutes } from "@routes";

interface AdminDashboardLayoutProps {
  children?: ReactNode;
}

type SidebarNavigationItem = {
  id: string;
  label: string;
  icon: ComponentType<any>;
  route: string;
};

type UserProfileNavigationItem = {
  id: string;
  label: string;
  icon: ComponentType<any>;
};

const userProfileNavigationItems: UserProfileNavigationItem[] = [
  {
    id: "myprofile",
    label: "My Profile",
    icon: MyProfileIcon,
  },
  {
    id: "updateprofile",
    label: "Update Profile",
    icon: PenIcon,
  },
  {
    id: "changepassword",
    label: "Change Password",
    icon: LockIcon,
  },
];

const sidebarNavigationItems: SidebarNavigationItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: DashboardIcon,
    route: dashboardRoutes.DASHBOARD_OVERVIEW,
  },
  {
    id: "courses",
    label: "Manage Courses",
    icon: ManageCoursesIcon,
    route: dashboardRoutes.DASHBOARD_MANAGE_COURSES,
  },
  {
    id: "wallet",
    label: "Wallet",
    icon: WalletIcon,
    route: dashboardRoutes.DASHBOARD_WALLET,
  },
  {
    id: "terms",
    label: "Terms & Conditions",
    icon: TermsAndConditionsIcon,
    route: dashboardRoutes.DASHBOARD_TERMS_AND_CONDITIONS,
  },
  {
    id: "privacy",
    label: "Privacy Policy",
    icon: PrivacyPolicyIcon,
    route: dashboardRoutes.DASHBOARD_PRIVACY_POLICY,
  },
];

const AdminDashboardLayout: React.FC<AdminDashboardLayoutProps> = ({
  children,
}) => {
  const [userNavigation, setUserNavigation] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <nav className="fixed top-0 z-30 w-full bg-[#F5F6FA] border-b border-gray-200">
        <div className="flex relative justify-between items-center px-3 py-3 pl-3">
          <form name="search" className="max-w-md ml-72">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-6 pointer-events-none">
                <SearchIcon />
              </div>
              <input
                name="search-input"
                type="search"
                className="block w-lg p-3 m-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-[#BB8F32] focus:border-[#BB8F32]"
                placeholder="Search"
                required
              />
            </div>
          </form>

          <div className="flex justify-center items-center pr-10">
            <NotificationIcon customStyle="mr-8 cursor-pointer" />
            <button
              className="flex items-center text-[1rem] pe-1 font-bold text-[#BB8F32] rounded-full me-0 focus:ring-4 focus:ring-gray-100 cursor-pointer"
              type="button"
              onClick={() => {
                setUserNavigation(userNavigation === true ? false : true);
              }}
            >
              <img
                className="w-14 h-14 me-2 rounded-full object-cover"
                src="https://s3-alpha-sig.figma.com/img/590c/5619/14379f2474bbc8a4787f2ade0777c52b?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cAzHFgeqTo3j~u9sflBpztP7kuAtJgYu1KHjCT8SG5iXwrPJY0nLPfaa3b2Mqhi~D~8QAdcoc0fBVzqpUH3DAfzpsdnbmTvIt4VOlvHGlJGBAzaKUODnqfoy5zwBgCibCdXSQq7XfleoM4URfFE24l9j-wHgq0gEfi87f4W1NTQSv4zlw~FxEicW95CdZEvytnw~3h8IrANHB7-Egzv7ui-wZIeiqwqEcNxXEWULtS4b4AjLBfLw5SUeYe9c~mWOEPUywWPhaX3R3fw9nuE6ypScbsKHNApy3K38SkSY-kd3QtRH9sqFW5r-1UI-xBWdjCaBIXnn7z3v~Hkvlp2ejw__"
                alt="user photo"
              />
              <div className="flex flex-col justify-center items-start">
                Teodora Grubor
                <span className="font-extralight text-black">Admin</span>
              </div>
              <div className="border flex justify-center items-center p-2 rounded-full ml-2">
                <ArrowDownIcon />
              </div>
            </button>
            {userNavigation && (
              <div className="z-10 absolute right-14 top-20 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44">
                <ul className="py-2 text-sm text-gray-700">
                  {userProfileNavigationItems.map((navigationItem) => {
                    const Icon = navigationItem.icon;

                    return (
                      <li
                        key={navigationItem.id}
                        className="flex justify-start items-center pl-2.5 hover:bg-gray-100"
                      >
                        <Icon customStyle="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                        <span className="block px-4 py-2 cursor-pointer">
                          {navigationItem.label}
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <div className="flex justify-start items-center py-2 pl-2.5 hover:bg-gray-100">
                  <LogoutIcon customStyle="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                  <span className="block px-4 py-2 text-sm text-gray-700 cursor-pointer">
                    Logout
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      <aside className="fixed top-0 left-0 z-40 w-64 h-screen pt-12 transition-transform bg-white border-r border-gray-200 translate-x-0">
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
          <div className="w-full flex justify-center items-center">
            <PrimaryLogo width={76} height={92} />
          </div>
          <ul className="space-y-2 font-medium mt-12">
            {sidebarNavigationItems.map((navigationItem) => {
              const Icon = navigationItem.icon;
              const isActive = location.pathname.includes(navigationItem.route);

              return (
                <li
                  key={navigationItem.id}
                  onClick={() => {
                    navigate(navigationItem.route);
                  }}
                >
                  <span
                    className={`flex items-center p-2 rounded-lg group cursor-pointer ${
                      isActive
                        ? "bg-[#BB8F32] hover:bg-[#BB8F32] text-white"
                        : "bg-white hover:bg-gray-100 text-gray-900"
                    }`}
                  >
                    <Icon
                      customStyle="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                      isActive={isActive}
                    />
                    <span className="ms-3">{navigationItem.label}</span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>

      <div className="p-4 ml-64 bg-[#F5F6FA]">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg mt-14">
          {children}
        </div>
      </div>
    </>
  );
};

export default AdminDashboardLayout;
