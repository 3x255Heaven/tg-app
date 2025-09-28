import { useCallback, useRef } from "react";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import "swiper/css";
import { motion, Variants, easeOut } from "framer-motion";

import ReviewItem from "./ReviewItem";
import ArrowDownIcon from "@assets/svgs/icons/ArrowDownIcon";

import nikolinaImage from "@assets/brand/reviews/NikolinaVrekic.jpg";
import kikaImage from "@assets/brand/reviews/KikaRajic.jpg";
import lavImage from "@assets/brand/reviews/LavBoka.jpeg";
import ivaImage from "@assets/brand/reviews/IvaMiletic.jpg";
import bokaImage from "@assets/brand/reviews/BokaMakeupStudio.jpg";

import { useTranslation } from "react-i18next";

const ReviewSlider = () => {
  const { t } = useTranslation();

  const reviewItems = [
    {
      id: 1,
      name: "Nikolina Vrekic",
      image: nikolinaImage,
      content: t("nikolina_review"),
      social: "https://www.instagram.com/nikolina.vrekic/?hl=en",
    },
    {
      id: 2,
      name: "Kika Rajic",
      image: kikaImage,
      content: t("kika_review"),
      social: "https://www.instagram.com/kikarajic/?hl=en",
    },
    {
      id: 3,
      name: "Lav Boka",
      image: lavImage,
      content: t("lav_review"),
      social: "https://www.instagram.com/lavlovestories/",
    },
    {
      id: 4,
      name: "Iva Miletic",
      image: ivaImage,
      content: t("iva_review"),
      social: "https://www.instagram.com",
    },
    {
      id: 5,
      name: "Boka Makeup Studio",
      image: bokaImage,
      content: t("boka_review"),
      social: "https://www.instagram.com/makeup_boka/?hl=en",
    },
  ];

  const sliderRef = useRef<SwiperRef | null>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const reviewVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  return (
    <section className="pt-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative">
        <Swiper
          ref={sliderRef}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 1, spaceBetween: 24 },
            1024: { slidesPerView: 1, spaceBetween: 32 },
            1280: { slidesPerView: 1, spaceBetween: 40 },
          }}
        >
          {reviewItems.map((reviewItem) => (
            <SwiperSlide key={reviewItem.id}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={reviewVariants}
              >
                <ReviewItem
                  image={reviewItem.image}
                  details={reviewItem.content}
                  name={reviewItem.name}
                  social={reviewItem.social}
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="hidden md:flex absolute inset-y-0 left-0 right-0 items-center justify-between px-2 sm:px-4 pointer-events-none">
          <div
            className="cursor-pointer pointer-events-auto bg-white shadow-md border rounded-full p-3 lg:p-4 rotate-90 ml-[-3rem]"
            onClick={handlePrev}
          >
            <ArrowDownIcon />
          </div>
          <div
            className="cursor-pointer pointer-events-auto bg-white shadow-md border rounded-full p-3 lg:p-4 -rotate-90 mr-[-3rem]"
            onClick={handleNext}
          >
            <ArrowDownIcon />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSlider;
