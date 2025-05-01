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

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.target.value);
  };

  const handleSubmit = () => {
    if (emailValue) {
      dispatch(forgotPassword({ email: emailValue }));
    }
  };

  return (
    <>
      <div className="w-[50px] h-[50px] bg-[#bb8f324d] rounded-full flex justify-center items-center mb-4">
        <KeyIcon />
      </div>
      <span className="font-montserrat text-[30px] font-bold leading-[43px] tracking-[0.04em]">
        Forgot password
      </span>
      <span className="font-poppins">
        No worries, we'll send you reset instructions.
      </span>
      <div className="flex flex-col items-center justify-center mt-4 w-full p-4 pt-0 pb-0">
        <input
          type="text"
          placeholder="Email Address"
          onChange={handleEmail}
          className="w-full border border-[#e1e1e1] rounded-[2rem] h-[3rem] p-2 px-4 text-[#000] font-poppins leading-[22.5px]"
        />
        <span
          className={`${
            emailValue.length > 0
              ? "cursor-pointer opacity-100"
              : "cursor-not-allowed opacity-50"
          } bg-gradient-to-r from-[#bb8f32] to-[#f6dc94] h-[45px] w-full rounded-full border-0 text-white font-poppins text-[18px] font-bold mt-6 cursor-pointer flex justify-center items-center text-center`}
          onClick={() => {
            setCurrentView("submitted");
            setEmail(emailValue);
            handleSubmit();
          }}
        >
          Submit
        </span>
        <div
          className="text-[#bb8f32] font-bold font-poppins self-center text-[18px] cursor-pointer flex justify-center items-center mt-6"
          onClick={() => {
            navigate(generalRoutes.LOGIN);
          }}
        >
          <span className="text-[32px] h-[53px] mr-2">&#8592;</span>
          <span>Back to Log In</span>
        </div>
      </div>
    </>
  );
};

export default SendMailView;
