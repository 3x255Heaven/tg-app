import Spinner from "@assets/svgs/Spinner";
import ShopLayout from "@shop/hoc/ShopLayout";
import { WistiaPlayer } from "@wistia/wistia-player-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { coursesItems } from "../../../mock";

const CourseContent = () => {
  const [course, setCourse] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { id } = useParams();
  const { t } = useTranslation();

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
      <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center py-10">
        <div className="w-full flex justify-center">
          <div className="w-full max-w-4xl aspect-video">
            <WistiaPlayer
              mediaId="gagamip5hh"
              controlsVisibleOnLoad={false}
              copyLinkAndThumbnail={false}
              doNotTrack={true}
              autoplay={true}
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center gap-10 items-center mt-10">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="font-malayalam text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#251D18] [text-shadow:0px_4px_5.3px_#BB8F3259] mb-4">
              {course.name}
            </h1>
            <div className="flex flex-col pt-4 border-t border-gray-200">
              <h2 className="font-bold mb-2 text-lg sm:text-xl md:text-2xl">
                {t("course_overview")}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-sm font-extralight">
                {course.description}
              </p>
            </div>
          </div>
          <div className="flex justify-center w-full lg:w-1/2">
            <img
              className="rounded-md object-cover w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-auto"
              src={course.image}
              alt={course.name}
            />
          </div>
        </div>
      </div>
    </ShopLayout>
  );
};

export default CourseContent;
