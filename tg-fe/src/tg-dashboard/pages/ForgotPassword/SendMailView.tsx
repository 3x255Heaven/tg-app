import { useState } from "react";
import { useNavigate } from "react-router";
import "./styles.scss";

import KeyIcon from "@assets/svgs/KeyIcon";
import { dashboardRoutes } from "@routes";
import { useForgotPassword } from "./ForgotPasswordContext";

const SendMailView = () => {
  const [emailValue, setEmailValue] = useState<string>("");
  const { setCurrentView, setEmail } = useForgotPassword();
  const navigate = useNavigate();

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.target.value);
  };

  return (
    <>
      <div className="forgot-password-icon-wrapper">
        <KeyIcon />
      </div>
      <span className="forgot-password-header">Forgot password</span>
      <span className="forgot-password-sub-header">
        No worries, we'll send you reset instructions.
      </span>
      <div className="forgot-password-form">
        <input type="text" placeholder="Email Address" onChange={handleEmail} />
        <span
          className="forgot-password-btn"
          onClick={() => {
            setCurrentView("submitted");
            setEmail(emailValue);
          }}
        >
          Submit
        </span>
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

export default SendMailView;
