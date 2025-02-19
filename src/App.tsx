import "@assets/main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { dashboardRoutes } from "./routes";
import Login from "@dashboard/pages/Login/Login";
import ForgotPassword from "@dashboard/pages/ForgotPassword/ForgotPassword";
import AdminDashboardLayout from "@dashboard/hoc/AdminDashboardLayout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path={dashboardRoutes.DASHBOARD_OVERVIEW}
          element={<AdminDashboardLayout />}
        />
        <Route
          path={dashboardRoutes.DASHBOARD_MANAGE_COURSES}
          element={<AdminDashboardLayout />}
        />
        <Route
          path={dashboardRoutes.DASHBOARD_WALLET}
          element={<AdminDashboardLayout />}
        />
        <Route path={dashboardRoutes.DASHBOARD_LOGIN} element={<Login />} />
        <Route
          path={dashboardRoutes.DASHBOARD_FORGOT_PASSWORD}
          element={<ForgotPassword />}
        />
        <Route
          path={dashboardRoutes.DASHBOARD_RESET_PASSWORD}
          element={<Login />}
        />
      </Routes>
    </Router>
  );
};

export default App;
