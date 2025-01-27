import { ReactNode } from "react";
import "./style.scss";
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
    <div className="admin-dashboard-background-layer-container">
      <div className="admin-dashboard-background-layer-top-vector">
        <AdminDashboardBackgroundVectorTop />
      </div>
      <div className="admin-dashboard-background-layer-bottom-vector">
        <AdminDashboardBackgroundVectorBottom />
      </div>
      <div className="admin-dashboard-background-logo">
        <SecondaryLogo />
      </div>
      <div className="admin-dashboard-background-layer-content">{children}</div>
    </div>
  );
};

export default AdminDashboardBackgroundLayer;
