import { useNavigate } from "react-router";
import "./styles.scss";

import MailIcon from "@assets/svgs/MailIcon";
import { dashboardRoutes } from "@routes";
import { useForgotPassword } from "./ForgotPasswordContext";

const CheckMailView = () => {
  const { email } = useForgotPassword();
  const navigate = useNavigate();

  return (
    <>
      <div className="forgot-password-icon-wrapper">
        <MailIcon />
      </div>
      <span className="forgot-password-header">Check your email</span>
      <span className="forgot-password-sub-header">
        We sent a password reset link to
      </span>
      <span className="forgot-password-email-value">{email}</span>
      <div className="forgot-password-form">
        <span
          className="open-mail-btn"
          onClick={() => window.open("https://mail.google.com", "_blank")}
        >
          Open Email
        </span>
        <div className="resend">
          <span className="resend-label">Didn’t receive the email?</span>
          <span className="resend-button">Resend</span>
        </div>
        <div
          className="forgot-password-back-btn"
          onClick={() => {
            navigate(dashboardRoutes.DASHBOARD_LOGIN);
          }}
        >
          <span className="back-arrow">&#8592;</span>
          <span>Back to Log In</span>
        </div>
      </div>
    </>
  );
};

export default CheckMailView;
