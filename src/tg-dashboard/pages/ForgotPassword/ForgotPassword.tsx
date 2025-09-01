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
      <div className="flex justify-center items-center px-4">
        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-lg bg-white p-6 sm:p-8 rounded-xl shadow-lg flex flex-col items-center">
          {currentView === "submit" ? <SendMailView /> : <CheckMailView />}
        </div>
      </div>
    </AdminDashboardBackgroundLayer>
  );
};

const ForgotPassword = () => (
  <ForgotPasswordProvider>
    <ForgotPasswordComponent />
  </ForgotPasswordProvider>
);

export default ForgotPassword;
