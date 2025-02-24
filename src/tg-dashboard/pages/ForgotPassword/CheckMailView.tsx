import { useNavigate } from "react-router";

import MailIcon from "@assets/svgs/MailIcon";
import { generalRoutes } from "@routes";
import { useForgotPassword } from "./ForgotPasswordContext";

const CheckMailView = () => {
  const { email } = useForgotPassword();
  const navigate = useNavigate();

  return (
    <>
      <div className="w-[50px] h-[50px] bg-[#bb8f324d] rounded-full flex justify-center items-center mb-4">
        <MailIcon />
      </div>
      <span className="font-montserrat text-[30px] font-bold leading-[43px] tracking-[0.04em]">
        Check your email
      </span>
      <span className="font-poppins text-[14px] mt-2">
        We sent a password reset link to
      </span>
      <span className="font-poppins text-[#bb8f32] text-[14px]">{email}</span>
      <div className="flex flex-col items-center justify-center mt-2 w-full p-4 pt-0 pb-0">
        <span
          className="bg-gradient-to-r from-[#bb8f32] to-[#f6dc94] h-[45px] w-full rounded-full border-0 text-white font-poppins text-[18px] font-bold cursor-pointer flex justify-center items-center text-center mt-4"
          onClick={() => window.open("https://mail.google.com", "_blank")}
        >
          Open Email
        </span>
        <div className="mt-6 flex justify-center items-center gap-2">
          <span className="font-poppins">Didn’t receive the email?</span>
          <span className="font-poppins text-[#bb8f32] cursor-pointer">
            Resend
          </span>
        </div>
        <div
          className="text-[#bb8f32] font-[600] font-poppins self-center text-[18px] cursor-pointer flex justify-center items-center mt-6"
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

export default CheckMailView;
