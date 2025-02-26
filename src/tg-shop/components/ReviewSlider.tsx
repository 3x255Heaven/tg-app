import { useCallback, useRef } from "react";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";

import "swiper/css";
import ReviewItem from "./ReviewItem";
import ArrowDownIcon from "@assets/svgs/ArrowDownIcon";

import { reivewItems } from "../../mock";

const ReviewSlider = () => {
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
    <section className="pt-20">
      <div className="container mx-auto">
        <Swiper slidesPerView={1} ref={sliderRef}>
          {reivewItems.map((reivewItem) => {
            return (
              <SwiperSlide key={reivewItem.id}>
                <ReviewItem
                  image={reivewItem.image}
                  details={reivewItem.content}
                  name={reivewItem.name}
                  position="Chief Executive Officer."
                />
              </SwiperSlide>
            );
          })}
          <div className="absolute top-1/3 left-0 right-0 z-10 flex items-center justify-center gap-5">
            <div
              className="cursor-pointer absolute left-0"
              onClick={handlePrev}
            >
              <div className="border rounded-full p-4 rotate-90">
                <ArrowDownIcon />
              </div>
            </div>
            <div
              className="cursor-pointer absolute right-0"
              onClick={handleNext}
            >
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
