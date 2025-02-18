import {
  ForgotPasswordProvider,
  useForgotPassword,
} from "./ForgotPasswordContext";
import AdminDashboardBackgroundLayer from "@dashboard/hoc/AdminDashboardBackgroundLayer";
import SendMailView from "./SendMailView";
import CheckMailView from "./CheckMailView";

const ForgotPasswordComponent = () => {
  const { currentView } = useForgotPassword();

  return (
    <AdminDashboardBackgroundLayer>
      <div className="w-[488px] rounded-[12px] shadow-[0px_4px_30px_0px_#00000026] bg-white p-[2rem] flex flex-col items-center">
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
