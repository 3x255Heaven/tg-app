import React from "react";
import DeleteIcon from "@assets/svgs/icons/DeleteIcon";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@store/store";
import { Course, deleteCourse } from "@store/slices/courseSlice";

interface DeleteCourseProps {
  closeModal: () => void;
  course: Course;
}

const DeleteCourse: React.FC<DeleteCourseProps> = ({ closeModal, course }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = () => {
    dispatch(deleteCourse(course._id));
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={closeModal}
      />

      <div className="relative p-4 w-full max-w-md max-h-full bg-white rounded-[20px] z-10">
        <div className="p-4">
          <div className="w-full flex justify-center items-center">
            <div className="rounded-full bg-[#FF5E5F] w-fit p-4">
              <DeleteIcon color="#FFF" width={34} height={34} />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center my-6">
            <span className="text-[#BB8F32] text-3xl">Delete Course?</span>
            <span className="mt-2">
              Are you sure you want to delete this course?
            </span>
          </div>
          <div className="w-full flex justify-around items-center">
            <span
              className="text-[#BB8F32] border border-[#BB8F32] rounded-full  h-[32px] w-fit px-14 py-5 cursor-pointer flex justify-center items-center text-center"
              onClick={closeModal}
            >
              Cancel
            </span>
            <span
              className="bg-[linear-gradient(274.47deg,#BB8F32_1.53%,#F6DC94_167.81%)] h-[32px] w-fit px-14 py-5 rounded-full border-0 text-white font-poppins text-[16px] cursor-pointer flex justify-center items-center text-center"
              onClick={() => {
                handleDelete();
              }}
            >
              Delete
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteCourse;
