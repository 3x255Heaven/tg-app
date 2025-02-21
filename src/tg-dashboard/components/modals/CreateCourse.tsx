import React from "react";
import CloseIcon from "@assets/svgs/CloseIcon";

interface CreateCourseProps {
  closeModal: () => void;
}

const CreateCourse: React.FC<CreateCourseProps> = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={closeModal}
      />

      <div className="relative p-4 w-full max-w-fit max-h-full bg-white rounded-[20px] shadow-sm z-10">
        <div className="flex items-center justify-between p-4 rounded-t">
          <h3 className="text-lg font-semibold text-gray-900">Add Course</h3>
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
          <div className="w-full flex flex-col mb-2">
            <input
              name="course-url"
              type="text"
              className="block w-full p-3 my-1 ps-10 text-sm text-gray-900 border border-[#E1E1E1] rounded-full bg-[#F9F9F9]"
              placeholder="Course Image URL"
              required
            />
          </div>
          <div className="w-full flex flex-col mb-2">
            <input
              name="course-title"
              type="text"
              className="block w-full p-3 my-1 ps-10 text-sm text-gray-900 border border-[#E1E1E1] rounded-full bg-[#F9F9F9]"
              placeholder="Course Title"
              required
            />
          </div>
          <div className="w-full flex mb-2">
            <input
              name="course-price"
              type="text"
              className="block w-3xs mr-2 p-3 my-1 ps-10 text-sm text-gray-900 border border-[#E1E1E1] rounded-full bg-[#F9F9F9]"
              placeholder="Course Price"
              required
            />
            <input
              name="discount-price"
              type="text"
              className="block w-3xs ml-2 p-3 my-1 ps-10 text-sm text-gray-900 border border-[#E1E1E1] rounded-full bg-[#F9F9F9]"
              placeholder="Discount Price"
              required
            />
          </div>
          <div className="w-full flex flex-col mb-2">
            <textarea
              name="course-description"
              className="block w-full h-[160px] p-3 my-1 ps-10 text-sm text-gray-900 border border-[#E1E1E1] rounded-[1rem] bg-[#F9F9F9]"
              placeholder="Course Description"
              required
            />
          </div>
          <div className="flex w-full justify-start items-center mt-6 ml-2">
            <input
              id="checkbox-item-2"
              type="checkbox"
              value=""
              className="w-4 h-4 text-[#BB8F32] bg-[#BB8F32] rounded-sm"
            />
            <label
              htmlFor="checkbox-item-2"
              className="ms-2 text-sm font-medium text-gray-900"
            >
              Publish Course
            </label>
          </div>
          <span className="bg-[linear-gradient(274.47deg,#BB8F32_1.53%,#F6DC94_167.81%)] h-[40px] w-1/2 rounded-full border-0 text-white font-poppins text-[16px] font-bold mt-6 cursor-pointer flex justify-center items-center text-center">
            Add Course
          </span>
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
