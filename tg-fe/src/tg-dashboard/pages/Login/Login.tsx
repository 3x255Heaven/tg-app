import { useNavigate } from "react-router";

import AdminDashboardBackgroundLayer from "@dashboard/hoc/AdminDashboardBackgroundLayer";
import { dashboardRoutes } from "@routes";

const Login = () => {
  const navigate = useNavigate();

  return (
    <AdminDashboardBackgroundLayer>
      <div className="w-[488px] rounded-[12px] shadow-[0px_4px_30px_0px_#00000026] bg-white p-[2.5rem]">
        <span className="font-montserrat text-[30px] font-bold leading-[43px] tracking-[0.04em]">
          Login
        </span>
        <div className="flex flex-col items-center justify-center mt-8 w-full p-[1rem] pt-0 pb-0">
          <input
            type="text"
            placeholder="Email Address"
            className="w-full border border-[#e1e1e1] rounded-[2rem] h-[3rem] mb-6 p-2 px-4 text-[#000] font-poppins leading-[22.5px]"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-[#e1e1e1] rounded-[2rem] h-[3rem] mb-6 p-2 px-4 text-[#000] font-poppins leading-[22.5px]"
          />
          <span
            className="text-[#bb8f32] font-bold font-poppins self-end text-[14px] cursor-pointer"
            onClick={() => {
              navigate(dashboardRoutes.DASHBOARD_FORGOT_PASSWORD);
            }}
          >
            Forgot your password?
          </span>
          <span className="bg-gradient-to-r from-[#bb8f32] to-[#f6dc94] via-[#bb8f32] h-[45px] w-full rounded-full border-0 text-white font-poppins text-[18px] font-bold mt-6 cursor-pointer flex justify-center items-center text-center">
            Log In
          </span>
        </div>
      </div>
    </AdminDashboardBackgroundLayer>
  );
};

export default Login;
