import ShopLayout from "@shop/hoc/ShopLayout";
import { useTranslation } from "react-i18next";
import { generalRoutes } from "@routes";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@store/store";
import EmptyIcon from "@assets/svgs/icons/EmptyIcon";

const MyCourses = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { userCourses } = useSelector(
    (state: RootState) => state.courseReducer
  );

  const hasCourses = userCourses && userCourses.length > 0;

  return (
    <ShopLayout>
      <div className="w-full flex flex-col justify-center items-center p-6 sm:p-10 mt-35 mb-5">
        {hasCourses ? (
          <>
            <div className="w-full flex flex-col justify-center items-center">
              <span className="font-malayalam text-3xl sm:text-4xl md:text-5xl text-[#251D18] [text-shadow:0px_4px_5.3px_#BB8F3259]">
                {t("my_courses")}
              </span>
            </div>
            <div className="w-full min-h-[40vh] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
              {userCourses.map((courseItem) => (
                <div
                  key={courseItem._id}
                  className="flex flex-col justify-center items-center max-w-md lg:max-w-lg cursor-pointer"
                  onClick={() =>
                    navigate(`${generalRoutes.MY_COURSES}/${courseItem._id}`)
                  }
                >
                  <img
                    className="rounded-lg h-[300px] sm:h-[350px] w-full object-cover"
                    src={courseItem.imageUrl}
                    alt={courseItem.name}
                  />
                  <div className="px-4 py-3 flex flex-col justify-center items-center text-center">
                    <span className="mb-1 font-bold tracking-tight text-black text-md sm:text-lg">
                      {courseItem.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center text-center min-h-[40vh]">
            <EmptyIcon />
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
              {t("no_courses_title", "No courses yet")}
            </h2>
            <p className="text-gray-500 mb-6 max-w-md">
              {t(
                "no_courses_description",
                "You haven't enrolled in any courses yet. Start exploring and learning today!"
              )}
            </p>
            <button
              onClick={() => navigate(generalRoutes.COURSES)}
              className="px-6 py-3 rounded-2xl bg-[#251D18] text-white font-medium shadow-md hover:bg-[#3a2e26] transition"
            >
              {t("browse_courses", "Browse Courses")}
            </button>
          </div>
        )}
      </div>
    </ShopLayout>
  );
};

export default MyCourses;
