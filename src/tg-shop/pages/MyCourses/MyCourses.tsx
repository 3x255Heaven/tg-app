import ShopLayout from "@shop/hoc/ShopLayout";
import { useTranslation } from "react-i18next";
import { generalRoutes } from "@routes";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@store/store";

const MyCourses = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { userCourses } = useSelector(
    (state: RootState) => state.courseReducer
  );

  return (
    <ShopLayout>
      <div className="w-full flex flex-col justify-center items-center p-6 sm:p-10 mt-18 mb-5">
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
                navigate(`${generalRoutes.COURSES}/${courseItem._id}`)
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
      </div>
    </ShopLayout>
  );
};

export default MyCourses;
