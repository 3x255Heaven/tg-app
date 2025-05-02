import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ShopLayout from "@shop/hoc/ShopLayout";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/store";
import { toast } from "react-toastify";
import { updateProfile } from "@store/slices/authSlice";

const MyProfile = () => {
  const { user } = useSelector((state: RootState) => state.authReducer);
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setFirstName(user.name.split(" ")[0]);
    setLastName(user.name.split(" ")[1]);
    setEmail(user.email);
  }, []);

  const handleSubmit = async () => {
    if (!firstName || !lastName || !email) {
      toast.error("All fields are required.");
      return;
    }

    await dispatch(
      updateProfile({
        userId: user._id,
        name: `${firstName} ${lastName}`,
        email,
      })
    );
  };

  return (
    <ShopLayout>
      <div className="w-full min-h-[60vh] flex flex-col justify-center items-center p-4 sm:p-6 md:p-10 mt-15 mb-5">
        <div className="w-full flex flex-col justify-center items-center">
          <span className="font-malayalam text-2xl sm:text-3xl md:text-5xl text-[#251D18] [text-shadow:0px_4px_5.3px_#BB8F3259]">
            {t("my_profile")}
          </span>
        </div>

        <div className="p-6 sm:p-8 w-full max-w-[90%] md:max-w-[50%] flex flex-col justify-center items-center shadow-md rounded-lg mt-6">
          <div className="w-full flex flex-col sm:flex-row gap-4 mb-2">
            <input
              type="text"
              name="firstName"
              placeholder={t("first_name")}
              className="block w-full p-3 text-sm text-gray-900 border border-[#E1E1E1] rounded-full bg-[#F9F9F9]"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder={t("last_name")}
              className="block w-full p-3 text-sm text-gray-900 border border-[#E1E1E1] rounded-full bg-[#F9F9F9]"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder={t("email")}
            className="block w-full p-3 text-sm text-gray-900 border border-[#E1E1E1] rounded-full bg-[#F9F9F9] mb-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            onClick={handleSubmit}
            className="bg-[linear-gradient(274.47deg,#BB8F32_1.53%,#F6DC94_167.81%)] h-[48px] w-full rounded-full text-white font-poppins text-[16px] font-bold mt-4 cursor-pointer flex justify-center items-center"
          >
            {t("update")}
          </button>
        </div>
      </div>
    </ShopLayout>
  );
};

export default MyProfile;
