import Line from "@assets/svgs/Line";
import { coursesOverviewItems } from "../../mock";

const CoursePreview = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center p-10 mt-5 mb-5">
      <div className="w-full flex flex-col justify-center items-center">
        <span className="font-malayalam text-5xl text-[#251D18] [text-shadow:0px_4px_5.3px_#BB8F3259]">
          Our Featured Courses
        </span>
        <span className="mt-2">Find the perfect course for you!</span>
      </div>
      <div className="w-full flex justify-center gap-4 items-center mt-15">
        {coursesOverviewItems.map((courseItem) => {
          return (
            <div
              key={courseItem.id}
              className="flex flex-col justify-center items-center"
            >
              <img
                className="rounded-lg h-[240px] w-[340px] object-cover"
                src={courseItem.image}
                alt={courseItem.name}
              />
              <div className="px-4 py-2 flex flex-col justify-center items-center">
                <span className="mb-1 font-bold tracking-tight text-black text-md">
                  {courseItem.name}
                </span>
                <span className="text-[#BB8F32] font-bold text-[18px]">
                  {courseItem.price}
                </span>
              </div>
              <span className="bg-[linear-gradient(274.47deg,#BB8F32_1.53%,#F6DC94_167.81%)] mt-2 h-[1rem] w-fit px-14 py-5 rounded-full border-0 text-white font-poppins text-[16px] cursor-pointer flex justify-center items-center text-center">
                Add to Cart
              </span>
            </div>
          );
        })}
      </div>
      <div className="w-full flex justify-center gap-4 items-center mt-15">
        <Line />

        <span className="text-[#BB8F32] border border-[#BB8F32] hover:bg-[#BB8F32] hover:text-white transition-[2s] rounded-full h-[32px] w-fit px-14 py-5 cursor-pointer flex justify-center items-center text-center font-bold">
          View All Courses
        </span>

        <div className="rotate-180">
          <Line />
        </div>
      </div>
    </div>
  );
};

export default CoursePreview;
