import "@assets/main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { dashboardRoutes, generalRoutes } from "./routes";
import Login from "@dashboard/pages/Login/Login";
import ForgotPassword from "@dashboard/pages/ForgotPassword/ForgotPassword";
import Notifications from "@dashboard/pages/Notifications/Notifications";
import Wallet from "@dashboard/pages/Wallet/Wallet";
import TermsAndConditions from "@dashboard/pages/TermsAndConditions/TermsAndConditions";
import PrivacyPolicy from "@dashboard/pages/PrivacyPolicy/PrivacyPolicy";
import Courses from "@shop/pages/Courses/Courses";
import DashboardCourses from "@dashboard/pages/Courses/Courses";
import Overview from "@dashboard/pages/Overview/Overview";
import CourseDetails from "@dashboard/pages/Courses/CourseDetails";
import Course from "@shop/pages/Course/Course";
import Home from "@shop/pages/Home/Home";
import MyCourses from "@shop/pages/MyCourses/MyCourses";
import MyProfile from "@shop/pages/MyProfile/MyProfile";
import CourseContent from "@shop/pages/CourseContent/CourseContent";

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
          element={<DashboardCourses />}
        />
        <Route
          path={`${dashboardRoutes.DASHBOARD_COURSE}/:id`}
          element={<CourseDetails />}
        />
        <Route path={dashboardRoutes.DASHBOARD_WALLET} element={<Wallet />} />
        <Route path={generalRoutes.LOGIN} element={<Login />} />
        <Route path={generalRoutes.HOME} element={<Home />} />
        <Route path={generalRoutes.COURSES} element={<Courses />} />
        <Route path={generalRoutes.COURSE_DETAILS} element={<Course />} />
        <Route path={generalRoutes.MY_COURSES} element={<MyCourses />} />
        <Route path={generalRoutes.MY_PROFILE} element={<MyProfile />} />
        <Route
          path={generalRoutes.COURSE_CONTENT}
          element={<CourseContent />}
        />
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
