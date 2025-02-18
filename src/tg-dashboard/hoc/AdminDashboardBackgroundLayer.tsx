import { ReactNode } from "react";
import AdminDashboardBackgroundVectorTop from "@assets/svgs/AdminDashboardBackgroundVectorTop";
import AdminDashboardBackgroundVectorBottom from "@assets/svgs/AdminDashboardBackgroundVectorBottom";
import SecondaryLogo from "@assets/svgs/SecondaryLogo";

interface AdminDashboardBackgroundLayerProps {
  children?: ReactNode;
}

const AdminDashboardBackgroundLayer: React.FC<
  AdminDashboardBackgroundLayerProps
> = ({ children }) => {
  return (
    <div className="w-screen h-screen overflow-hidden relative flex justify-center items-center flex-col bg-gradient-to-r from-[#bb8f32] via-[#f6dc94] to-[#f6dc94]">
      <div className="absolute top-0 right-0">
        <AdminDashboardBackgroundVectorTop />
      </div>
      <div className="absolute bottom-0 left-0">
        <AdminDashboardBackgroundVectorBottom />
      </div>
      <div className="mb-8">
        <SecondaryLogo />
      </div>
      <div className="h-auto w-auto z-10">{children}</div>
    </div>
  );
};

export default AdminDashboardBackgroundLayer;
