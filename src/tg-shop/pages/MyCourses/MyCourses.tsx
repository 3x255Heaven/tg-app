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
      <div className="w-full flex flex-col justify-center items-center p-6 sm:p-10 mt-30 mb-10">
        {hasCourses ? (
          <>
            <div className="w-full flex flex-col justify-center items-center">
              <h1 className="font-malayalam text-3xl sm:text-4xl md:text-5xl text-[#251D18] [text-shadow:0px_4px_5.3px_#BB8F3259]">
                {t("my_courses")}
              </h1>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full max-w-7xl">
              {userCourses.map((courseItem) => (
                <div
                  key={courseItem._id}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:scale-[1.03] cursor-pointer overflow-hidden"
                  onClick={() =>
                    navigate(`${generalRoutes.MY_COURSES}/${courseItem._id}`)
                  }
                >
                  <img
                    className="w-full h-56 object-cover"
                    src={courseItem.imageUrl}
                    alt={courseItem.name}
                  />
                  <div className="p-4 flex flex-col justify-center items-center">
                    <span className="mb-1 font-semibold tracking-tight text-black text-base sm:text-lg text-center">
                      {courseItem.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center text-center min-h-[50vh] px-4">
            <EmptyIcon customStyle="w-20 h-20 mb-6 text-gray-400" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
              {t("no_courses_title", "No courses yet")}
            </h2>
            <p className="text-gray-500 mb-8 max-w-lg leading-relaxed">
              {t(
                "no_courses_description",
                "You haven't enrolled in any courses yet. Start exploring and learning today!"
              )}
            </p>
            <button
              onClick={() => navigate(generalRoutes.COURSES)}
              className="cursor-pointer px-6 py-3 rounded-xl bg-gradient-to-r from-[#BB8F32] to-[#F6DC94] text-[#251D18] font-semibold shadow-lg hover:opacity-90 transition"
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
