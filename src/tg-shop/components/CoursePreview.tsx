import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <div className="w-full flex flex-col justify-center items-center p-6 sm:p-10 mt-2 mb-5">
      <motion.div
        className="w-full flex flex-col justify-center items-center text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="font-malayalam text-3xl sm:text-4xl md:text-5xl text-[#251D18] [text-shadow:0px_4px_5.3px_#BB8F3259]">
          {t("featured_courses")}
        </span>
        <span className="mt-2 text-sm sm:text-base">
          {t("featured_courses_description")}
        </span>
      </motion.div>

      <motion.div
        className="w-full flex flex-wrap justify-center gap-10 items-stretch mt-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {featuredCourses.map((courseItem) => {
          return (
            <motion.div
              key={courseItem._id}
              className="flex flex-col justify-between items-center cursor-pointer flex-1 min-w-[300px] max-w-[400px]"
              variants={cardVariants}
            >
              <img
                className="rounded-lg h-[600px] w-full object-cover"
                src={courseItem.imageUrl}
                alt={courseItem.name}
                onClick={() => {
                  navigate(`${generalRoutes.COURSES}/${courseItem._id}`);
                }}
              />

              <div
                className="px-4 py-4 flex flex-col justify-between items-center h-[120px] w-full"
                onClick={() => {
                  navigate(`${generalRoutes.COURSES}/${courseItem._id}`);
                }}
              >
                <span className="mb-1 font-bold tracking-tight text-black text-lg sm:text-xl text-center">
                  {courseItem.name}
                </span>

                <div className="flex flex-col items-center">
                  {courseItem.discount > 0 && (
                    <span className="text-[#bebebc] text-[14px] line-through">
                      {courseItem.price}.00 RSD
                    </span>
                  )}
                  <span className="text-[#BB8F32] font-bold text-[18px] sm:text-[20px]">
                    {courseItem.discount
                      ? Number(courseItem.price.toString().replace(".", "")) -
                        courseItem.discount
                      : courseItem.price}
                    .00 RSD
                  </span>
                </div>
              </div>

              {user && (
                <span
                  className={`mt-2 h-[2.5rem] w-1/2 px-8 py-2 rounded-full border-0 font-poppins text-[16px] flex justify-center items-center text-center ${
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
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        className="w-full flex justify-center gap-4 items-center mt-14 flex-wrap"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
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
      </motion.div>
    </div>
  );
};

export default CoursePreview;
