import React from "react";
import CloseIcon from "@assets/svgs/CloseIcon";

interface UpdateCourseProps {
  closeModal: () => void;
  course: any;
}

const UpdateCourse: React.FC<UpdateCourseProps> = ({ closeModal, course }) => {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      <div
        className="absolute inset-0 bg-black opacity-5"
        onClick={closeModal}
      />

      <div className="relative p-4 w-full max-w-fit max-h-full bg-white rounded-[20px] z-10">
        <div className="flex items-center justify-between p-4 rounded-t">
          <h3 className="text-lg font-semibold text-gray-900">Update Course</h3>
          <button
            type="button"
            className="text-gray-400 bg-transparent cursor-pointer rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
          >
            <div
              className="border flex justify-center items-center p-2 rounded-full ml-2"
              onClick={closeModal}
            >
              <CloseIcon color="#101828" />
            </div>
          </button>
        </div>

        <div className="p-4 flex flex-col justify-center items-center">
          <div className="w-full flex flex-col mb-2 justify-center items-center">
            <img
              className="rounded-2xl h-[200px] w-full object-cover"
              src={course.image}
              alt="Course Image"
            />
            <span className="bg-[linear-gradient(274.47deg,#BB8F32_1.53%,#F6DC94_167.81%)] h-[24px] w-[140px] rounded-full border-0 text-white font-poppins text-[14px] mt-6 cursor-pointer flex justify-center items-center text-center">
              Change Image
            </span>
          </div>
          <div className="w-full flex flex-col mb-2 mt-6">
            <span className="text-[#BB8F32] font-[600] ml-2">Course Title</span>
            <input
              name="course-title"
              type="text"
              className="block w-full p-3 my-1 ps-10 text-sm text-gray-900 border border-[#E1E1E1] rounded-full bg-[#F9F9F9]"
              placeholder="Course Title"
              defaultValue={course.name}
              required
            />
          </div>
          <div className="w-full flex mb-2 mt-2">
            <div className="flex flex-col">
              <span className="text-[#BB8F32] font-[600] ml-2">
                Course Price
              </span>
              <input
                name="course-price"
                type="text"
                className="block w-3xs mr-2 p-3 my-1 ps-10 text-sm text-gray-900 border border-[#E1E1E1] rounded-full bg-[#F9F9F9]"
                placeholder="Course Price"
                defaultValue={course.price}
                required
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[#BB8F32] font-[600] ml-2">
                Discount Price
              </span>
              <input
                name="discount-price"
                type="text"
                className="block w-3xs ml-2 p-3 my-1 ps-10 text-sm text-gray-900 border border-[#E1E1E1] rounded-full bg-[#F9F9F9]"
                placeholder="Discount Price"
                defaultValue={course.price}
                required
              />
            </div>
          </div>
          <div className="w-full flex flex-col mb-2 mt-2">
            <span className="text-[#BB8F32] font-[600] ml-2">
              Course Description
            </span>
            <textarea
              name="course-description"
              className="block w-full h-[160px] p-3 my-1 ps-10 text-sm text-gray-900 border border-[#E1E1E1] rounded-[1rem] bg-[#F9F9F9]"
              placeholder="Course Description"
              defaultValue={course.description}
              required
            />
          </div>
          <span className="bg-[linear-gradient(274.47deg,#BB8F32_1.53%,#F6DC94_167.81%)] h-[40px] w-1/2 rounded-full border-0 text-white font-poppins text-[16px] font-bold mt-6 cursor-pointer flex justify-center items-center text-center">
            Update Course
          </span>
        </div>
      </div>
    </div>
  );
};

export default UpdateCourse;
