import { useTranslation } from "react-i18next";
import aboutImage from "@assets/brand/about.png";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-8 px-6 lg:px-10 pb-10">
      <img
        className="w-full max-w-[590px] max-h-[720px] h-auto object-contain"
        src={aboutImage}
        alt={t("about_alt")}
        loading="lazy"
      />
      <div className="flex flex-col w-full lg:w-1/4 xl:w-1/5 text-center lg:text-left">
        <span className="font-malayalam text-3xl sm:text-4xl md:text-5xl text-[#251D18] [text-shadow:0px_4px_5px_#BB8F3259]">
          {t("about_me")}
        </span>
        <span className="mt-4 text-sm sm:text-base leading-relaxed whitespace-pre-line">
          {t("about")}
        </span>
      </div>
    </div>
  );
};

export default About;
