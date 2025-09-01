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
      toast.error(error || "Failed to register");
    }
  };

  return (
    <AdminDashboardBackgroundLayer>
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-lg bg-white p-6 sm:p-10 rounded-xl shadow-lg relative">
        {isLoading && (
          <div className="absolute inset-0 bg-white bg-opacity-75 flex justify-center items-center rounded-xl z-10">
            <Spinner customStyle="w-16 h-16 animate-spin" />
          </div>
        )}
        <h1 className="text-2xl sm:text-3xl font-bold font-montserrat text-center mb-8">
          Register
        </h1>
        <form onSubmit={handleRegister} className="flex flex-col gap-4 w-full">
          <input
            type="text"
            placeholder="First Name"
            required
            className="w-full border border-gray-300 rounded-2xl h-12 px-4 text-gray-900 font-poppins focus:outline-none focus:ring-2 focus:ring-[#bb8f32]"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            required
            className="w-full border border-gray-300 rounded-2xl h-12 px-4 text-gray-900 font-poppins focus:outline-none focus:ring-2 focus:ring-[#bb8f32]"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full border border-gray-300 rounded-2xl h-12 px-4 text-gray-900 font-poppins focus:outline-none focus:ring-2 focus:ring-[#bb8f32]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              className="w-full border border-gray-300 rounded-2xl h-12 px-4 pr-12 text-gray-900 font-poppins focus:outline-none focus:ring-2 focus:ring-[#bb8f32]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              <EyeIcon
                width={22}
                height={22}
                color={showPassword ? "#000" : "#99a1af"}
              />
            </button>
          </div>
          <div className="relative w-full">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              required
              className="w-full border border-gray-300 rounded-2xl h-12 px-4 pr-12 text-gray-900 font-poppins focus:outline-none focus:ring-2 focus:ring-[#bb8f32]"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              aria-label={
                showConfirmPassword
                  ? "Hide confirm password"
                  : "Show confirm password"
              }
            >
              <EyeIcon
                width={22}
                height={22}
                color={showConfirmPassword ? "#000" : "#99a1af"}
              />
            </button>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`${
              isLoading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            } bg-gradient-to-r from-[#bb8f32] via-[#bb8f32] to-[#f6dc94] h-12 w-full rounded-full text-white font-poppins font-bold text-lg flex justify-center items-center mt-4`}
          >
            Register
          </button>
          <span
            className="text-[#bb8f32] font-bold font-poppins text-sm text-center mt-4 cursor-pointer"
            onClick={() => navigate(generalRoutes.LOGIN)}
          >
            Already have an account? Log In
          </span>
        </form>
      </div>
    </AdminDashboardBackgroundLayer>
  );
};

export default Register;
