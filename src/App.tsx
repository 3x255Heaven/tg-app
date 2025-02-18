import "@assets/main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "@dashboard/pages/Login/Login";
import ForgotPassword from "@dashboard/pages/ForgotPassword/ForgotPassword";
import { dashboardRoutes } from "./routes";

const App = () => {
  return (
    <Router>
      <Routes>
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
