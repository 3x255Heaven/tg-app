import { useTranslation } from "react-i18next";
import { motion, Variants, easeOut } from "framer-motion";
import ReviewSlider from "./ReviewSlider";

const Reviews = () => {
  const { t } = useTranslation();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, when: "beforeChildren" },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  return (
    <motion.section
      className="w-full flex flex-col justify-center items-center pt-8 sm:pt-12 lg:pt-16 px-4 sm:px-8 lg:px-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div
        className="flex flex-col items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-0 max-w-3xl text-center"
        variants={itemVariants}
      >
        <h2 className="font-malayalam text-3xl sm:text-4xl lg:text-5xl text-[#251D18] [text-shadow:0px_4px_5.3px_#BB8F3259] leading-snug">
          {t("reviews_title")}
        </h2>
        <p className="text-center text-sm sm:text-base lg:text-lg text-gray-700">
          {t("reviews_subtitle")}
        </p>
      </motion.div>

      <motion.div className="w-full max-w-7xl" variants={itemVariants}>
        <ReviewSlider />
      </motion.div>
    </motion.section>
  );
};

export default Reviews;
