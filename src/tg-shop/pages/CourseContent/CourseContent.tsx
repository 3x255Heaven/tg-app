import Spinner from "@assets/svgs/Spinner";
import ShopLayout from "@shop/hoc/ShopLayout";
import { WistiaPlayer } from "@wistia/wistia-player-react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/store";
import { getCourse } from "@store/slices/courseSlice";

const CourseContent = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  const { course, isLoading } = useSelector(
    (state: RootState) => state.courseReducer
  );

  useEffect(() => {
    if (id) {
      dispatch(getCourse(id));
    }
  }, [id]);

  if (isLoading || !course) {
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
      <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center py-10 mt-24">
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
        <div className="flex flex-col lg:flex-row justify-center gap-10 items-center mt-10">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="font-malayalam text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#251D18] [text-shadow:0px_4px_5.3px_#BB8F3259] mb-4">
              {course.name}
            </h1>
            <div className="flex flex-col pt-4 border-t border-gray-200">
              <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-sm font-extralight">
                {course.description}
              </p>
            </div>
          </div>
          <div className="flex justify-center w-full lg:w-1/2">
            <img
              className="rounded-md object-cover w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-auto"
              src={course.imageUrl}
              alt={course.name}
            />
          </div>
        </div>
      </div>
    </ShopLayout>
  );
};

export default CourseContent;
