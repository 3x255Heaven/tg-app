import { useNavigate } from "react-router";

import MailIcon from "@assets/svgs/icons/MailIcon";
import { generalRoutes } from "@routes";
import { useForgotPassword } from "./ForgotPasswordContext";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@store/store";
import { forgotPassword } from "@store/slices/authSlice";

const CheckMailView = () => {
  const { email } = useForgotPassword();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = () => {
    if (email) {
      dispatch(forgotPassword({ email }));
      navigate(generalRoutes.LOGIN);
    }
  };

  return (
    <div className="flex flex-col items-center w-full gap-4">
      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#bb8f324d] rounded-full flex justify-center items-center mb-2">
        <MailIcon />
      </div>
      <h1 className="text-2xl sm:text-3xl font-bold font-montserrat text-center">
        Check your email
      </h1>
      <p className="text-center font-poppins text-sm sm:text-base">
        We sent a password reset link to
      </p>
      <span className="font-poppins text-[#bb8f32] text-sm sm:text-base">
        {email}
      </span>

      <div className="flex flex-col w-full gap-4 mt-2">
        <button
          onClick={() => window.open("https://mail.google.com", "_blank")}
          className="cursor-pointer bg-gradient-to-r from-[#bb8f32] via-[#bb8f32] to-[#f6dc94] h-12 w-full rounded-full text-white font-poppins font-bold flex justify-center items-center mt-2"
        >
          Open Email
        </button>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mt-2 text-sm sm:text-base">
          <span className="font-poppins">Didn’t receive the email?</span>
          <span
            className="font-poppins text-[#bb8f32] cursor-pointer"
            onClick={handleSubmit}
          >
            Resend
          </span>
        </div>

        <div
          className="text-[#bb8f32] font-bold font-poppins text-center text-lg cursor-pointer flex justify-center items-center gap-2 mt-4"
          onClick={() => navigate(generalRoutes.LOGIN)}
        >
          <span className="text-2xl sm:text-3xl">&#8592;</span>
          <span>Back to Log In</span>
        </div>
      </div>
    </div>
  );
};

export default CheckMailView;
