import { useCallback, useRef } from "react";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import "swiper/css";
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

  const reivewItems = [
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
      social: "https://www.instagram.com/makeup_boka/?hl=en",
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

  return (
    <section className="pt-10">
      <div className="container mx-auto px-6 sm:px-10 md:px-20">
        <Swiper slidesPerView={1} spaceBetween={10} ref={sliderRef}>
          {reivewItems.map((reivewItem) => {
            return (
              <SwiperSlide key={reivewItem.id}>
                <ReviewItem
                  image={reivewItem.image}
                  details={reivewItem.content}
                  name={reivewItem.name}
                  social={reivewItem.social}
                />
              </SwiperSlide>
            );
          })}
          <div className="absolute top-1/3 left-0 right-0 z-10 flex items-center justify-between px-4">
            <div className="cursor-pointer" onClick={handlePrev}>
              <div className="border rounded-full p-4 rotate-90">
                <ArrowDownIcon />
              </div>
            </div>
            <div className="cursor-pointer" onClick={handleNext}>
              <div className="border rounded-full p-4 rotate-270">
                <ArrowDownIcon />
              </div>
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default ReviewSlider;
