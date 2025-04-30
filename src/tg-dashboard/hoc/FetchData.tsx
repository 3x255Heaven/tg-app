import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCourses,
  getPublicCourses,
  getFeaturedCourses,
} from "@store/slices/courseSlice";
import { AppDispatch, RootState } from "@store/store";
import Spinner from "@assets/svgs/Spinner";

type Props = {
  children: React.ReactNode;
};

const FetchData = ({ children }: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  const { isLoading, error } = useSelector(
    (state: RootState) => state.courseReducer
  );

  useEffect(() => {
    dispatch(getCourses());
    dispatch(getPublicCourses());
    dispatch(getFeaturedCourses());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="w-full h-[calc(100vh-120px)] p-4  flex flex-col justify-center items-center">
        <Spinner />
      </div>
    );
  }

  if (error) return <p>Error: {String(error)}</p>;

  return <>{children}</>;
};

export default FetchData;
