import { useState } from "react";

import DotsIcon from "@assets/svgs/DotsIcon";
import PenIcon from "@assets/svgs/PenIcon";
import DeleteIcon from "@assets/svgs/DeleteIcon";
import EyeIcon from "@assets/svgs/EyeIcon";

import { ModalType } from "./Courses";

interface CourseProps {
  course: any;
  toggleActiveModal: (modalType: ModalType) => void;
}

const Course: React.FC<CourseProps> = ({ course, toggleActiveModal }) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  return (
    <div className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">
      <span
        className="absolute right-0 inline-flex items-center p-2 text-sm font-medium text-center text-white focus:outline-none cursor-pointer"
        onClick={() => {
          setShowDropdown((prev) => !prev);
        }}
      >
        <DotsIcon />
      </span>

      {showDropdown && (
        <div className="absolute right-4 top-8 z-50 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44">
          <ul className="py-2 text-sm text-gray-700">
            <li>
              <div className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer">
                <EyeIcon />
                <span className="ml-4">View</span>
              </div>
            </li>
            <li>
              <div
                className="px-4 py-2 hover:bg-gray-100 flex items-center border-t border-[#0000001C] cursor-pointer"
                onClick={() => {
                  toggleActiveModal("update");
                  setShowDropdown((prev) => !prev);
                }}
              >
                <PenIcon />
                <span className="ml-4">Update</span>
              </div>
            </li>
            <li>
              <div
                className="px-4 py-2 hover:bg-gray-100 flex items-center border-t border-[#0000001C] cursor-pointer"
                onClick={() => {
                  toggleActiveModal("delete");
                  setShowDropdown((prev) => !prev);
                }}
              >
                <DeleteIcon />
                <span className="ml-4">Delete</span>
              </div>
            </li>
          </ul>
        </div>
      )}

      <img
        className="rounded-t-lg h-[140px] w-full object-cover"
        src={course.image}
        alt={course.name}
      />
      <div className="px-4 py-2 flex flex-col">
        <span className="mb-1 font-bold tracking-tight text-black text-md">
          {course.name}
        </span>
        <span className="text-[#BB8F32] font-bold text-[18px]">
          {course.price}
        </span>
      </div>
    </div>
  );
};

export default Course;
