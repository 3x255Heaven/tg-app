import { useState } from "react";
import { useNavigate } from "react-router";

import KeyIcon from "@assets/svgs/icons/KeyIcon";
import { generalRoutes } from "@routes";
import { useForgotPassword } from "./ForgotPasswordContext";
import { AppDispatch } from "@store/store";
import { useDispatch } from "react-redux";
import { forgotPassword } from "@store/slices/authSlice";

const SendMailView = () => {
  const [emailValue, setEmailValue] = useState<string>("");
  const { setCurrentView, setEmail } = useForgotPassword();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (emailValue) {
      dispatch(forgotPassword({ email: emailValue }));
    }
  };

  return (
    <div className="flex flex-col items-center w-full gap-4">
      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#bb8f324d] rounded-full flex justify-center items-center mb-2">
        <KeyIcon />
      </div>
      <h1 className="text-2xl sm:text-3xl font-bold font-montserrat text-center">
        Forgot password
      </h1>
      <p className="text-center font-poppins">
        No worries, we'll send you reset instructions.
      </p>

      <div className="flex flex-col w-full gap-4 mt-2">
        <input
          type="text"
          placeholder="Email Address"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
          className="w-full border border-gray-300 rounded-2xl h-12 px-4 font-poppins focus:outline-none focus:ring-2 focus:ring-[#bb8f32]"
        />

        <button
          disabled={!emailValue}
          onClick={() => {
            setCurrentView("submitted");
            setEmail(emailValue);
            handleSubmit();
          }}
          className={`${
            emailValue
              ? "cursor-pointer opacity-100"
              : "cursor-not-allowed opacity-50"
          } bg-gradient-to-r from-[#bb8f32] via-[#bb8f32] to-[#f6dc94] h-12 w-full rounded-full text-white font-poppins font-bold flex justify-center items-center mt-2`}
        >
          Submit
        </button>

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

export default SendMailView;
