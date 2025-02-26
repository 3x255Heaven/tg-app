import ReviewSlider from "./ReviewSlider";

const Reviews = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center pt-10 pl-10 pr-10">
      <div className="flex flex-col items-center justify-center gap-4">
        <span className="font-malayalam text-5xl text-[#251D18] [text-shadow:0px_4px_5.3px_#BB8F3259]">
          What People are Saying!
        </span>
        <span>
          Real stories from students who turned their passion into success.
        </span>
      </div>
      <ReviewSlider />
    </div>
  );
};

export default Reviews;
