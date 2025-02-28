import { useTranslation } from "react-i18next";
import aboutImage from "@assets/brand/about.jpg";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-8 px-6 lg:px-10 pb-10">
      <img
        className="w-full max-w-[490px] h-auto lg:h-[570px] object-cover"
        src={aboutImage}
        alt="about"
      />
      <div className="flex flex-col w-full lg:w-1/2 xl:w-1/3 lg:mt-14 text-center lg:text-left">
        <span className="font-malayalam text-3xl sm:text-4xl md:text-5xl text-[#251D18] [text-shadow:0px_4px_5.3px_#BB8F3259]">
          {t("aboutMe")}
        </span>
        <span className="mt-4 text-sm sm:text-base leading-relaxed text-left">
          {t("about")}
        </span>
      </div>
    </div>
  );
};

export default About;
