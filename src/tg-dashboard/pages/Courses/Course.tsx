import { useState } from "react";
import { useNavigate } from "react-router-dom";

import DotsIcon from "@assets/svgs/icons/DotsIcon";
import PenIcon from "@assets/svgs/icons/PenIcon";
import DeleteIcon from "@assets/svgs/icons/DeleteIcon";
import EyeIcon from "@assets/svgs/icons/EyeIcon";

import { ModalType } from "./Courses";
import DeleteCourse from "@dashboard/components/modals/DeleteCourse";
import UpdateCourse from "@dashboard/components/modals/UpdateCourse";
import { dashboardRoutes } from "@routes";

interface CourseProps {
  course: any;
}

const Course: React.FC<CourseProps> = ({ course }) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [activeModal, setActiveModal] = useState<ModalType | null>(null);
  const navigate = useNavigate();

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
              <div
                className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer"
                onClick={() => {
                  navigate(`${dashboardRoutes.DASHBOARD_COURSE}/${course.id}`);
                }}
              >
                <EyeIcon />
                <span className="ml-4">View</span>
              </div>
            </li>
            <li>
              <div
                className="px-4 py-2 hover:bg-gray-100 flex items-center border-t border-[#0000001C] cursor-pointer"
                onClick={() => {
                  setActiveModal("update");
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
                  setActiveModal("delete");
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

      {activeModal === "delete" && (
        <DeleteCourse
          course={course}
          closeModal={() => {
            setActiveModal(null);
          }}
        />
      )}
      {activeModal === "update" && (
        <UpdateCourse
          course={course}
          closeModal={() => {
            setActiveModal(null);
          }}
        />
      )}
    </div>
  );
};

export default Course;
