import "@assets/main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { dashboardRoutes, generalRoutes } from "./routes";
import Login from "@dashboard/pages/Login/Login";
import ForgotPassword from "@dashboard/pages/ForgotPassword/ForgotPassword";
import Notifications from "@dashboard/pages/Notifications/Notifications";
import Wallet from "@dashboard/pages/Wallet/Wallet";
import TermsAndConditions from "@dashboard/pages/TermsAndConditions/TermsAndConditions";
import PrivacyPolicy from "@dashboard/pages/PrivacyPolicy/PrivacyPolicy";
import Courses from "@dashboard/pages/Courses/Courses";
import Overview from "@dashboard/pages/Overview/Overview";
import CourseDetails from "@dashboard/pages/Courses/CourseDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path={dashboardRoutes.DASHBOARD_NOTIFICATIONS}
          element={<Notifications />}
        />
        <Route
          path={dashboardRoutes.DASHBOARD_TERMS_AND_CONDITIONS}
          element={<TermsAndConditions />}
        />
        <Route
          path={dashboardRoutes.DASHBOARD_PRIVACY_POLICY}
          element={<PrivacyPolicy />}
        />
        <Route
          path={dashboardRoutes.DASHBOARD_OVERVIEW}
          element={<Overview />}
        />
        <Route
          path={dashboardRoutes.DASHBOARD_MANAGE_COURSES}
          element={<Courses />}
        />
        <Route
          path={`${dashboardRoutes.DASHBOARD_COURSE}/:id`}
          element={<CourseDetails />}
        />
        <Route path={dashboardRoutes.DASHBOARD_WALLET} element={<Wallet />} />
        <Route path={generalRoutes.LOGIN} element={<Login />} />
        <Route
          path={generalRoutes.FORGOT_PASSWORD}
          element={<ForgotPassword />}
        />
        <Route path={generalRoutes.RESET_PASSWORD} element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
