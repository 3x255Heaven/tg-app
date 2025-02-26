import ReviewSlider from "./ReviewSlider";

const Reviews = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center pt-10 px-6 sm:px-10 lg:px-20">
      <div className="flex flex-col items-center justify-center gap-4">
        <span className="font-malayalam text-4xl sm:text-5xl text-[#251D18] [text-shadow:0px_4px_5.3px_#BB8F3259]">
          What People are Saying!
        </span>
        <span className="text-center text-sm sm:text-base lg:text-lg">
          Real stories from students who turned their passion into success.
        </span>
      </div>
      <ReviewSlider />
    </div>
  );
};

export default Reviews;
