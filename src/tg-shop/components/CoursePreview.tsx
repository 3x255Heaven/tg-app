import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "@store/store";
import { addToCart } from "@store/slices/authSlice";

import { generalRoutes } from "@routes";

import Line from "@assets/svgs/Line";

const CoursePreview = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { user } = useSelector((state: RootState) => state.authReducer);
  const { featuredCourses, userCourses } = useSelector(
    (state: RootState) => state.courseReducer
  );

  const isCourseOwnedByUser = (courseId: string) => {
    return userCourses.some((userCourse) => userCourse._id === courseId);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center p-6 sm:p-10 mt-5 mb-5">
      <div className="w-full flex flex-col justify-center items-center text-center">
        <span className="font-malayalam text-3xl sm:text-4xl md:text-5xl text-[#251D18] [text-shadow:0px_4px_5.3px_#BB8F3259]">
          {t("featured_courses")}
        </span>
        <span className="mt-2 text-sm sm:text-base">
          {t("featured_courses_description")}
        </span>
      </div>
      <div className="w-full flex flex-wrap justify-center gap-10 items-center mt-10">
        {featuredCourses.map((courseItem) => {
          return (
            <div
              key={courseItem._id}
              className="flex flex-col justify-center items-center max-w-xs sm:max-w-sm cursor-pointer"
            >
              <img
                className="rounded-lg h-[200px] sm:h-[240px] w-full object-cover"
                src={courseItem.imageUrl}
                alt={courseItem.name}
                onClick={() => {
                  navigate(`${generalRoutes.COURSES}/${courseItem._id}`);
                }}
              />
              <div
                className="px-4 py-2 flex flex-col justify-center items-center"
                onClick={() => {
                  navigate(`${generalRoutes.COURSES}/${courseItem._id}`);
                }}
              >
                <span className="mb-1 font-bold tracking-tight text-black text-sm sm:text-md">
                  {courseItem.name}
                </span>
                {courseItem.discount > 0 && (
                  <span className="text-[#bebebc] text-[14px] line-through">
                    {courseItem.price}.00 RSD
                  </span>
                )}
                <span className="text-[#BB8F32] font-bold text-[16px] sm:text-[18px]">
                  {courseItem.discount
                    ? courseItem.price - courseItem.discount
                    : courseItem.price}
                  .00 RSD
                </span>
              </div>
              {user && (
                <span
                  className={`mt-2 h-[2.5rem] w-fit px-8 py-2 rounded-full border-0 font-poppins text-[14px] sm:text-[16px] flex justify-center items-center text-center ${
                    isCourseOwnedByUser(courseItem._id)
                      ? "bg-[#251D18] text-white font-medium shadow-md hover:bg-[#3a2e26] transition"
                      : "bg-[linear-gradient(274.47deg,#BB8F32_1.53%,#F6DC94_167.81%)] text-white cursor-pointer"
                  }`}
                  onClick={() => {
                    if (!isCourseOwnedByUser(courseItem._id)) {
                      dispatch(addToCart(courseItem));
                    } else {
                      navigate(`${generalRoutes.MY_COURSES}/${courseItem._id}`);
                    }
                  }}
                >
                  {isCourseOwnedByUser(courseItem._id)
                    ? t("go_to_course")
                    : t("add_to_cart")}
                </span>
              )}
            </div>
          );
        })}
      </div>
      <div className="w-full flex justify-center gap-4 items-center mt-14 flex-wrap">
        <Line customStyle="w-1/5 bg-[#BB8F32] lg:bg-none lg:w-auto " />

        <span
          className="text-[#BB8F32] border border-[#BB8F32] hover:bg-[#BB8F32] hover:text-white transition-all duration-300 rounded-full h-[32px] w-fit px-6 py-2 cursor-pointer flex justify-center items-center text-center font-bold text-sm sm:text-base"
          onClick={() => {
            navigate(generalRoutes.COURSES);
          }}
        >
          {t("see_all_courses")}
        </span>

        <Line customStyle="w-1/5 bg-[#BB8F32] lg:bg-none lg:w-auto rotate-180" />
      </div>
    </div>
  );
};

export default CoursePreview;
