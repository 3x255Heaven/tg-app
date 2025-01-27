import {
  ForgotPasswordProvider,
  useForgotPassword,
} from "./ForgotPasswordContext";
import AdminDashboardBackgroundLayer from "@dashboard/hoc/AdminDashboardBackgroundLayer/AdminDashboardBackgroundLayer";
import SendMailView from "./SendMailView";
import CheckMailView from "./CheckMailView";

const ForgotPasswordComponent = () => {
  const { currentView } = useForgotPassword();

  return (
    <AdminDashboardBackgroundLayer>
      <div className="forgot-password-container">
        {currentView === "submit" ? <SendMailView /> : <CheckMailView />}
      </div>
    </AdminDashboardBackgroundLayer>
  );
};

const ForgotPassword = () => {
  return (
    <ForgotPasswordProvider>
      <ForgotPasswordComponent />
    </ForgotPasswordProvider>
  );
};

export default ForgotPassword;
