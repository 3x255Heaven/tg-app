import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ShopLayout from "@shop/hoc/ShopLayout";
import { coursesItems } from "../../../mock";
import Spinner from "@assets/svgs/Spinner";
import { generalRoutes } from "@routes";
import ArrowDownIcon from "@assets/svgs/ArrowDownIcon";

const Course = () => {
  const [course, setCourse] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { id } = useParams();
  const { t } = useTranslation();
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
      <ShopLayout>
        <div className="w-full min-h-[calc(100vh-120px)] p-4 flex flex-col justify-center items-center">
          <Spinner />
        </div>
      </ShopLayout>
    );
  }

  return (
    <ShopLayout>
      <div className="w-full p-6 sm:p-10 md:p-14 flex flex-col">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li
              className="inline-flex items-center"
              onClick={() => {
                navigate(generalRoutes.HOME);
              }}
            >
              <span className="inline-flex items-center text-sm font-medium text-[#BB8F32] cursor-pointer">
                Home
              </span>
            </li>
            <li>
              <div
                className="flex items-center"
                onClick={() => {
                  navigate(generalRoutes.COURSES);
                }}
              >
                <ArrowDownIcon customStyle="rotate-270 w-3 h-3 text-gray-300 mx-1" />
                <span className="ms-1 text-sm font-medium text-[#BB8F32] cursor-pointer">
                  Courses
                </span>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <ArrowDownIcon customStyle="rotate-270 w-3 h-3 text-gray-300 mx-1" />
                <span className="ms-1 text-sm font-bold md:ms-2">
                  {course.name}
                </span>
              </div>
            </li>
          </ol>
        </nav>
        <div className="flex flex-col-reverse lg:flex-row justify-center gap-10 lg:gap-2 items-center mt-6">
          <div className="w-full lg:w-1/2 flex flex-col text-center lg:text-left">
            <span className="text-gray-600 font-bold text-lg sm:text-xl md:text-2xl">
              {course.name}
            </span>
            <span className="text-[#BB8F32] font-bold text-[22px] sm:text-[26px] md:text-[28px] mb-2.5">
              {course.price}
            </span>
            <div className="flex flex-col pt-4 border-t border-gray-200">
              <span className="font-bold mb-2 text-lg sm:text-xl md:text-2xl">
                {t("courseOverview")}
              </span>
              <span className="text-gray-600 text-sm sm:text-base md:text-lg font-extralight">
                {course.description}
              </span>
            </div>
            <span className="bg-[linear-gradient(274.47deg,#BB8F32_1.53%,#F6DC94_167.81%)] mt-6 sm:mt-10 h-[2.5rem] px-6 sm:px-8 py-2 rounded-full border-0 text-white font-poppins text-[14px] sm:text-[16px] cursor-pointer flex justify-center items-center text-center w-full sm:w-fit mx-auto lg:mx-0">
              {t("addToCart")}
            </span>
          </div>
          <div className="flex justify-center w-full lg:w-1/2">
            <img
              className="rounded-xs object-cover w-full max-w-[400px] sm:max-w-[500px] md:max-w-[588px] h-auto"
              src={course.image}
              alt={course.name}
            />
          </div>
        </div>
      </div>
    </ShopLayout>
  );
};

export default Course;
