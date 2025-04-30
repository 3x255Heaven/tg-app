import { ReactNode, ComponentType, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import DashboardIcon from "@assets/svgs/icons/DashboardIcon";
import ManageCoursesIcon from "@assets/svgs/icons/ManageCoursesIcon";
import WalletIcon from "@assets/svgs/icons/WalletIcon";
import PrimaryLogo from "@assets/svgs/PrimaryLogo";
import SearchIcon from "@assets/svgs/icons/SearchIcon";
import ArrowDownIcon from "@assets/svgs/icons/ArrowDownIcon";
import MyProfileIcon from "@assets/svgs/icons/MyProfileIcon";
import LockIcon from "@assets/svgs/icons/LockIcon";
import PenIcon from "@assets/svgs/icons/PenIcon";
import LogoutIcon from "@assets/svgs/icons/LogoutIcon";
import NotificationIcon from "@assets/svgs/icons/NotificationIcon";

import MyProfile from "@dashboard/components/modals/MyProfile";
import UpdateProfile from "@dashboard/components/modals/UpdateProfile";
import ChangePassword from "@dashboard/components/modals/ChangePassword";
import Logout from "@dashboard/components/modals/Logout";

import { dashboardRoutes } from "@routes";
import { useSelector } from "react-redux";
import { RootState } from "@store/store";
import { UserAvatar } from "@dashboard/components/UserAvatar";

interface AdminDashboardLayoutProps {
  children?: ReactNode;
}

type ModalType = "myprofile" | "updateprofile" | "changepassword" | "logout";

type SidebarNavigationItem = {
  id: string;
  label: string;
  icon: ComponentType<any>;
  route: string;
};

type UserProfileNavigationItem = {
  id: ModalType;
  label: string;
  icon: ComponentType<any>;
};

const userProfileNavigationItems: UserProfileNavigationItem[] = [
  { id: "myprofile", label: "My Profile", icon: MyProfileIcon },
  { id: "updateprofile", label: "Update Profile", icon: PenIcon },
  { id: "changepassword", label: "Change Password", icon: LockIcon },
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
];

const AdminDashboardLayout: React.FC<AdminDashboardLayoutProps> = ({
  children,
}) => {
  const { user } = useSelector((state: RootState) => state.authReducer);
  const { courses } = useSelector((state: RootState) => state.courseReducer);
  const [userNavigation, setUserNavigation] = useState<boolean>(false);
  const [activeModal, setActiveModal] = useState<ModalType | null>(null);
  const [searchValue, setSearchValue] = useState<string>("");
  const navigate = useNavigate();
  const location = useLocation();

  const filteredCourses = searchValue
    ? courses.filter((course) =>
        course.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    : [];

  return (
    <div className="relative w-screen h-screen overflow-x-hidden font-montserrat">
      <nav className="fixed top-0 z-30 w-full bg-[#F5F6FA] border-b border-gray-200">
        <div className="flex relative justify-between items-center px-3 py-3 pl-3">
          <form name="search" className="max-w-md ml-72 relative">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-6 pointer-events-none">
                <SearchIcon />
              </div>
              <input
                name="search-input"
                type="search"
                className="block w-lg p-3 m-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-[#BB8F32] focus:border-[#BB8F32]"
                placeholder="Search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                required
              />
            </div>

            {filteredCourses.length > 0 && (
              <ul className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                {filteredCourses.map((course) => (
                  <li
                    key={course._id}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      navigate(
                        `${dashboardRoutes.DASHBOARD_COURSE}/${course._id}`
                      );
                      setSearchValue("");
                    }}
                  >
                    {course.name}
                  </li>
                ))}
              </ul>
            )}
          </form>

          <div className="flex justify-center items-center pr-10">
            <div
              className="relative"
              onClick={() => {
                navigate(dashboardRoutes.DASHBOARD_NOTIFICATIONS);
              }}
            >
              <NotificationIcon customStyle="mr-8 cursor-pointer" />
              <span className="absolute -top-1 right-6 bg-[#F93C65] text-white text-[10px] font-bold w-4 h-4 rounded-full flex justify-center items-center">
                2
              </span>
            </div>
            <button
              className="flex items-center gap-1 text-[1rem] pe-1 font-bold text-[#BB8F32] rounded-full me-0 focus:ring-4 focus:ring-gray-100 cursor-pointer"
              type="button"
              onClick={() => {
                setUserNavigation((prev) => !prev);
              }}
            >
              <UserAvatar name={user.name} />
              <div className="flex flex-col ml-2 justify-center items-start">
                {user.name}
                <span className="font-extralight capitalize text-black">
                  {user.role}
                </span>
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
                        onClick={() => {
                          setActiveModal(navigationItem.id);
                          setUserNavigation(false);
                        }}
                      >
                        <Icon customStyle="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                        <span className="block px-4 py-2 cursor-pointer">
                          {navigationItem.label}
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <div
                  className="flex justify-start items-center py-2 pl-2.5 hover:bg-gray-100"
                  onClick={() => {
                    setActiveModal("logout");
                    setUserNavigation(false);
                  }}
                >
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
                  className={`relative px-4 py-2 before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 before:h-10 before:w-1.5 before:rounded-md ${
                    isActive ? "before:bg-[#BB8F32]" : "before:bg-white"
                  }`}
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

      <div className="p-4 ml-64 mt-22 bg-[#F5F6FA]">{children}</div>

      {activeModal === "myprofile" && (
        <MyProfile closeModal={() => setActiveModal(null)} />
      )}
      {activeModal === "changepassword" && (
        <ChangePassword closeModal={() => setActiveModal(null)} />
      )}
      {activeModal === "updateprofile" && (
        <UpdateProfile closeModal={() => setActiveModal(null)} />
      )}
      {activeModal === "logout" && (
        <Logout closeModal={() => setActiveModal(null)} />
      )}
    </div>
  );
};

export default AdminDashboardLayout;
