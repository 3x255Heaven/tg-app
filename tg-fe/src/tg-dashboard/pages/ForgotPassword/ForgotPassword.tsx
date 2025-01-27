import "./styles.scss";
import AdminDashboardBackgroundLayer from "@dashboard/hoc/AdminDashboardBackgroundLayer/AdminDashboardBackgroundLayer";

const ForgotPassword = () => {
  return (
    <AdminDashboardBackgroundLayer>
      <div className="forgot-password-container">
        <span className="forgot-password-header">Login</span>
        <div className="forgot-password-form">
          <input type="text" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <span className="forgot-password-forgot-password-label">
            Forgot your password?
          </span>
          <span className="forgot-password-btn">Log In</span>
        </div>
      </div>
    </AdminDashboardBackgroundLayer>
  );
};

export default ForgotPassword;
