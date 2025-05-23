import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminDashboardLayout from "@dashboard/hoc/AdminDashboardLayout";

import { dashboardRoutes } from "@routes";
import Spinner from "@assets/svgs/Spinner";
import ArrowDownIcon from "@assets/svgs/icons/ArrowDownIcon";
import PenIcon from "@assets/svgs/icons/PenIcon";
import DeleteIcon from "@assets/svgs/icons/DeleteIcon";
import { ModalType } from "./Courses";
import DeleteCourse from "@dashboard/components/modals/DeleteCourse";
import UpdateCourse from "@dashboard/components/modals/UpdateCourse";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/store";
import { getCourse } from "@store/slices/courseSlice";
import { WistiaPlayer } from "@wistia/wistia-player-react";

const CourseDetails = () => {
  const [activeModal, setActiveModal] = useState<ModalType | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { course, isLoading } = useSelector(
    (state: RootState) => state.courseReducer
  );

  useEffect(() => {
    if (id) {
      dispatch(getCourse(id));
    }
  }, [id]);

  if (isLoading || course === null) {
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

        <div className="w-full flex justify-center">
          <div className="w-full max-w-4xl aspect-video">
            <WistiaPlayer
              mediaId={course.courseUrl}
              controlsVisibleOnLoad={false}
              copyLinkAndThumbnail={false}
              doNotTrack={true}
              autoplay={true}
            />
          </div>
        </div>

        <div className="flex justify-center items-center mt-6">
          <div className="w-1/2 flex flex-col">
            <span className="text-gray-600 font-bold text-[28px]">
              {course.name}
            </span>
            {course.discount > 0 && (
              <span className="text-[#bebebc] text-[18px] line-through">
                {course.price}.00 RSD
              </span>
            )}
            <span className="text-[#BB8F32] font-bold text-[28px] mb-2.5">
              {course.discount ? course.price - course.discount : course.price}
              .00 RSD
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
              src={course.imageUrl}
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
