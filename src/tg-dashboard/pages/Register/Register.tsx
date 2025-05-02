import { useState } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { generalRoutes } from "@routes";
import { dispatch, RootState } from "@store/store";
import { registerRequest } from "@store/slices/authSlice";
import AdminDashboardBackgroundLayer from "@dashboard/hoc/AdminDashboardBackgroundLayer";
import Spinner from "@assets/svgs/Spinner";
import EyeIcon from "@assets/svgs/icons/EyeIcon";

const Register = () => {
  const { isLoading } = useSelector((state: RootState) => state.authReducer);
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = async (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      await dispatch(
        registerRequest({ name: `${firstName} ${lastName}`, email, password })
      ).unwrap();
      navigate(generalRoutes.HOME);
    } catch (error: any) {
      const errorMessage = error || "Failed to register";
      toast.error(errorMessage);
    }
  };

  return (
    <AdminDashboardBackgroundLayer>
      <div className="relative w-[488px] min-h-[560px] rounded-[12px] shadow-[0px_4px_30px_0px_#00000026] bg-white p-[2.5rem]">
        {isLoading ? (
          <div className="w-full h-[460px] flex justify-center items-center">
            <Spinner />
          </div>
        ) : (
          <>
            <span className="font-montserrat text-[30px] font-bold leading-[43px] tracking-[0.04em]">
              Register
            </span>
            <form
              onSubmit={handleRegister}
              className="flex flex-col items-center justify-center mt-8 w-full p-[1rem] pt-0 pb-0"
            >
              <input
                type="text"
                placeholder="First Name"
                className="w-full border border-[#e1e1e1] rounded-[2rem] h-[3rem] mb-6 p-2 px-4 text-[#000] font-poppins leading-[22.5px]"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full border border-[#e1e1e1] rounded-[2rem] h-[3rem] mb-6 p-2 px-4 text-[#000] font-poppins leading-[22.5px]"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Email Address"
                className="w-full border border-[#e1e1e1] rounded-[2rem] h-[3rem] mb-6 p-2 px-4 text-[#000] font-poppins leading-[22.5px]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="relative w-full mb-6">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full border border-[#e1e1e1] rounded-[2rem] h-[3rem] p-2 px-4 text-[#000] font-poppins leading-[22.5px] pr-12"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeIcon width={22} height={22} />
                  ) : (
                    <EyeIcon color="#99a1af" width={22} height={22} />
                  )}
                </button>
              </div>
              <div className="relative w-full mb-6">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  className="w-full border border-[#e1e1e1] rounded-[2rem] h-[3rem] p-2 px-4 text-[#000] font-poppins leading-[22.5px] pr-12"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                  aria-label={
                    showConfirmPassword
                      ? "Hide confirm password"
                      : "Show confirm password"
                  }
                >
                  {showConfirmPassword ? (
                    <EyeIcon width={22} height={22} />
                  ) : (
                    <EyeIcon color="#99a1af" width={22} height={22} />
                  )}
                </button>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className={`${
                  isLoading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                } bg-gradient-to-r from-[#bb8f32] to-[#f6dc94] via-[#bb8f32] h-[45px] w-full rounded-full border-0 text-white font-poppins text-[18px] font-bold mt-6 flex justify-center items-center text-center`}
              >
                Register
              </button>
              <span
                className="text-[#bb8f32] font-bold font-poppins text-[14px] cursor-pointer mt-4"
                onClick={() => navigate(generalRoutes.LOGIN)}
              >
                Already have an account? Log In
              </span>
            </form>
          </>
        )}
      </div>
    </AdminDashboardBackgroundLayer>
  );
};

export default Register;
