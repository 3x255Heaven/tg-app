import "@assets/main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { dashboardRoutes, generalRoutes } from "./routes";
import Login from "@dashboard/pages/Login/Login";
import ForgotPassword from "@dashboard/pages/ForgotPassword/ForgotPassword";
import Notifications from "@dashboard/pages/Notifications/Notifications";
import Wallet from "@dashboard/pages/Wallet/Wallet";
import Courses from "@shop/pages/Courses/Courses";
import DashboardCourses from "@dashboard/pages/Courses/Courses";
import Overview from "@dashboard/pages/Overview/Overview";
import CourseDetails from "@dashboard/pages/Courses/CourseDetails";
import Course from "@shop/pages/Course/Course";
import Home from "@shop/pages/Home/Home";
import MyCourses from "@shop/pages/MyCourses/MyCourses";
import MyProfile from "@shop/pages/MyProfile/MyProfile";
import CourseContent from "@shop/pages/CourseContent/CourseContent";
import ProtectedRoute from "@dashboard/components/ProtectedRoute";
import ChangePassword from "@shop/pages/ChangePassword/ChangePassword";
import Register from "@dashboard/pages/Register/Register";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path={dashboardRoutes.DASHBOARD_NOTIFICATIONS}
          element={
            <ProtectedRoute>
              <Notifications />
            </ProtectedRoute>
          }
        />
        <Route
          path={dashboardRoutes.DASHBOARD_OVERVIEW}
          element={
            <ProtectedRoute>
              <Overview />
            </ProtectedRoute>
          }
        />
        <Route
          path={dashboardRoutes.DASHBOARD_MANAGE_COURSES}
          element={
            <ProtectedRoute>
              <DashboardCourses />
            </ProtectedRoute>
          }
        />
        <Route
          path={`${dashboardRoutes.DASHBOARD_COURSE}/:id`}
          element={
            <ProtectedRoute>
              <CourseDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path={dashboardRoutes.DASHBOARD_WALLET}
          element={
            <ProtectedRoute>
              <Wallet />
            </ProtectedRoute>
          }
        />
        <Route path={generalRoutes.LOGIN} element={<Login />} />
        <Route path={generalRoutes.REGISTER} element={<Register />} />
        <Route path={generalRoutes.HOME} element={<Home />} />
        <Route path={generalRoutes.COURSES} element={<Courses />} />
        <Route path={generalRoutes.COURSE_DETAILS} element={<Course />} />
        <Route
          path={generalRoutes.MY_COURSES}
          element={
            <ProtectedRoute>
              <MyCourses />
            </ProtectedRoute>
          }
        />
        <Route
          path={generalRoutes.MY_PROFILE}
          element={
            <ProtectedRoute>
              <MyProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path={generalRoutes.CHANGE_PASSWORD}
          element={
            <ProtectedRoute>
              <ChangePassword />
            </ProtectedRoute>
          }
        />
        <Route
          path={generalRoutes.COURSE_CONTENT}
          element={
            <ProtectedRoute>
              <CourseContent />
            </ProtectedRoute>
          }
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
