import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminDashboardLayout from "@dashboard/hoc/AdminDashboardLayout";

import { dashboardRoutes } from "@routes";
import { coursesItems } from "../../../mock";
import Spinner from "@assets/svgs/Spinner";
import ArrowDownIcon from "@assets/svgs/ArrowDownIcon";
import PenIcon from "@assets/svgs/PenIcon";
import DeleteIcon from "@assets/svgs/DeleteIcon";
import { ModalType } from "./Courses";
import DeleteCourse from "@dashboard/components/modals/DeleteCourse";
import UpdateCourse from "@dashboard/components/modals/UpdateCourse";

const CourseDetails = () => {
  const [course, setCourse] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeModal, setActiveModal] = useState<ModalType | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const fetchCourse = async () => {
        const courseData = await getCourse();
        setCourse(courseData);
        setIsLoading(false);
      };

      fetchCourse();
    }
  }, [id]);

  const getCourse = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(coursesItems.find((course) => course.id === Number(id)));
      }, 2000);
    });
  };

  if (isLoading) {
    return (
      <AdminDashboardLayout>
        <div className="w-full min-h-[calc(100vh-120px)] p-4  flex flex-col justify-center items-center">
          <Spinner />
        </div>
      </AdminDashboardLayout>
    );
  }

  return (
    <AdminDashboardLayout>
      <div className="w-full min-h-[calc(100vh-120px)] p-4 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <div className="flex justify-start items-center">
            <div
              className="rounded-full bg-white shadow p-4 text-[#BB8F32] rotate-90 mr-4 cursor-pointer"
              onClick={() => {
                navigate(dashboardRoutes.DASHBOARD_MANAGE_COURSES);
              }}
            >
              <ArrowDownIcon />
            </div>
            <span className="text-3xl font-bold">Course Details</span>
          </div>
          <div className="flex justify-end items-center">
            <div
              className="bg-[#BB8F32]/20 rounded-full p-2 mr-4 cursor-pointer"
              onClick={() => {
                setActiveModal("update");
              }}
            >
              <PenIcon />
            </div>
            <div
              className="bg-[#BB8F32]/20 rounded-full p-2 cursor-pointer"
              onClick={() => {
                setActiveModal("delete");
              }}
            >
              <DeleteIcon />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-6">
          <div className="w-1/2 flex flex-col">
            <span className="text-gray-600 font-bold text-[28px]">
              {course.name}
            </span>
            <span className="text-[#BB8F32] font-bold text-[28px] mb-2.5">
              {course.price}
            </span>
            <div className="flex flex-col mr-6 pt-4 border-t border-gray-200">
              <span className="font-bold mb-2">Course Overview</span>
              <span className="text-gray-600 text-[14px] font-extralight">
                {course.description}
              </span>
            </div>
          </div>
          <div className="flex h-full w-fit self-start justify-end">
            <img
              className="rounded-xs object-cover w-[588px] h-[476px]"
              src={course.image}
              alt={course.name}
            />
          </div>
        </div>
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
    </AdminDashboardLayout>
  );
};

export default CourseDetails;
