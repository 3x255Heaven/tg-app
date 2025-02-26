import Line from "@assets/svgs/Line";
import { coursesOverviewItems } from "../../mock";

const CoursePreview = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center p-6 sm:p-10 mt-5 mb-5">
      <div className="w-full flex flex-col justify-center items-center text-center">
        <span className="font-malayalam text-3xl sm:text-4xl md:text-5xl text-[#251D18] [text-shadow:0px_4px_5.3px_#BB8F3259]">
          Our Featured Courses
        </span>
        <span className="mt-2 text-sm sm:text-base">
          Find the perfect course for you!
        </span>
      </div>
      <div className="w-full flex flex-wrap justify-center gap-6 items-center mt-10">
        {coursesOverviewItems.map((courseItem) => {
          return (
            <div
              key={courseItem.id}
              className="flex flex-col justify-center items-center max-w-xs sm:max-w-sm"
            >
              <img
                className="rounded-lg h-[200px] sm:h-[240px] w-full object-cover"
                src={courseItem.image}
                alt={courseItem.name}
              />
              <div className="px-4 py-2 flex flex-col justify-center items-center">
                <span className="mb-1 font-bold tracking-tight text-black text-sm sm:text-md">
                  {courseItem.name}
                </span>
                <span className="text-[#BB8F32] font-bold text-[16px] sm:text-[18px]">
                  {courseItem.price}
                </span>
              </div>
              <span className="bg-[linear-gradient(274.47deg,#BB8F32_1.53%,#F6DC94_167.81%)] mt-2 h-[2.5rem] w-fit px-8 py-2 rounded-full border-0 text-white font-poppins text-[14px] sm:text-[16px] cursor-pointer flex justify-center items-center text-center">
                Add to Cart
              </span>
            </div>
          );
        })}
      </div>
      <div className="w-full flex justify-center gap-4 items-center mt-10 flex-wrap">
        <Line customStyle="w-1/5 bg-[#BB8F32] lg:bg-none lg:w-auto " />

        <span className="text-[#BB8F32] border border-[#BB8F32] hover:bg-[#BB8F32] hover:text-white transition-all duration-300 rounded-full h-[32px] w-fit px-6 py-2 cursor-pointer flex justify-center items-center text-center font-bold text-sm sm:text-base">
          View All Courses
        </span>

        <Line customStyle="w-1/5 bg-[#BB8F32] lg:bg-none lg:w-auto rotate-180" />
      </div>
    </div>
  );
};

export default CoursePreview;
