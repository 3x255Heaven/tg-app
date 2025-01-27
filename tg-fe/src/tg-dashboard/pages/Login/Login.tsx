import { useNavigate } from "react-router";

import "./styles.scss";
import AdminDashboardBackgroundLayer from "@dashboard/hoc/AdminDashboardBackgroundLayer/AdminDashboardBackgroundLayer";
import { dashboardRoutes } from "@routes";

const Login = () => {
  const navigate = useNavigate();

  return (
    <AdminDashboardBackgroundLayer>
      <div className="login-container">
        <span className="login-header">Login</span>
        <div className="login-form">
          <input type="text" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <span
            className="login-forgot-password-label"
            onClick={() => {
              navigate(dashboardRoutes.DASHBOARD_FORGOT_PASSWORD);
            }}
          >
            Forgot your password?
          </span>
          <span className="login-btn">Log In</span>
        </div>
      </div>
    </AdminDashboardBackgroundLayer>
  );
};

export default Login;
