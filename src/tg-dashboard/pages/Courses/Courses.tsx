import { useState } from "react";

import AdminDashboardLayout from "@dashboard/hoc/AdminDashboardLayout";
import Course from "./Course";
import CreateCourse from "@dashboard/components/modals/CreateCourse";
import { useSelector } from "react-redux";
import { RootState } from "@store/store";
import FetchData from "@dashboard/hoc/FetchData";

export type ModalType = "create" | "update" | "delete";

const Courses = () => {
  const [activeModal, setActiveModal] = useState<ModalType | null>(null);

  const { courses } = useSelector((state: RootState) => state.courseReducer);

  const toggleActiveModal = (modalType: ModalType | null) => {
    setActiveModal(modalType);
  };

  return (
    <AdminDashboardLayout>
      <FetchData>
        <div className="w-full p-4  flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <span className="text-3xl font-bold">Courses</span>
            <span
              className="bg-[linear-gradient(274.47deg,#BB8F32_1.53%,#F6DC94_167.81%)] h-[2rem] w-[10rem] rounded-full border-0 text-white font-poppins text-[16px] font-bold cursor-pointer flex justify-center items-center text-center"
              onClick={() => {
                toggleActiveModal("create");
              }}
            >
              + Add Course
            </span>
          </div>
          <div className="w-full grid grid-cols-4 grid-rows-4 gap-2 py-4">
            {courses.map((courseItem) => {
              return <Course key={courseItem._id} course={courseItem} />;
            })}
          </div>
        </div>
        {activeModal === "create" && (
          <CreateCourse
            closeModal={() => {
              setActiveModal(null);
            }}
          />
        )}
      </FetchData>
    </AdminDashboardLayout>
  );
};

export default Courses;
