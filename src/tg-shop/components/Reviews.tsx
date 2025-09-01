import { useTranslation } from "react-i18next";
import ReviewSlider from "./ReviewSlider";

const Reviews = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full flex flex-col justify-center items-center pt-8 sm:pt-12 lg:pt-16 px-4 sm:px-8 lg:px-20">
      <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-10 max-w-3xl text-center">
        <h2 className="font-malayalam text-3xl sm:text-4xl lg:text-5xl text-[#251D18] [text-shadow:0px_4px_5.3px_#BB8F3259] leading-snug">
          {t("reviews_title")}
        </h2>
        <p className="text-center text-sm sm:text-base lg:text-lg text-gray-700">
          {t("reviews_subtitle")}
        </p>
      </div>

      <div className="w-full max-w-7xl">
        <ReviewSlider />
      </div>
    </section>
  );
};

export default Reviews;
