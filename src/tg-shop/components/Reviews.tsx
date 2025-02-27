import { useTranslation } from "react-i18next";
import ReviewSlider from "./ReviewSlider";

const Reviews = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full flex flex-col justify-center items-center pt-10 px-6 sm:px-10 lg:px-20">
      <div className="flex flex-col items-center justify-center gap-4">
        <span className="font-malayalam text-4xl sm:text-5xl text-[#251D18] [text-shadow:0px_4px_5.3px_#BB8F3259]">
          {t("reviewTitle")}
        </span>
        <span className="text-center text-sm sm:text-base lg:text-lg">
          {t("reviewSubtitle")}
        </span>
      </div>
      <ReviewSlider />
    </div>
  );
};

export default Reviews;
