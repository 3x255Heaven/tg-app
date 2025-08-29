import { useTranslation } from "react-i18next";
import heroVideo from "@assets/brand/Hero.mp4";
import { useNavigate } from "react-router-dom";
import { generalRoutes } from "@routes";

const Hero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        loop
        muted
        autoPlay
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center px-4 text-center">
        <h2 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold italic max-w-4xl">
          {t("hero")}
        </h2>
        <span
          className="bg-[linear-gradient(274.47deg,#BB8F32_1.53%,#F6DC94_167.81%)] h-[2.5rem] w-[12rem] mt-12 rounded-full border-0 text-white font-poppins text-sm sm:text-[16px] cursor-pointer flex justify-center items-center text-center transition-all hover:opacity-90"
          onClick={() => {
            navigate(generalRoutes.COURSES);
          }}
        >
          {t("all_courses")}
        </span>
      </div>
    </div>
  );
};

export default Hero;
