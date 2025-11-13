import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/store";
import {
  getFeaturedCourses,
  getPublicCourses,
  getUserCourses,
} from "@store/slices/courseSlice";
import AdminDashboardBackgroundVectorBottom from "@assets/svgs/AdminDashboardBackgroundVectorBottom";
import AdminDashboardBackgroundVectorTop from "@assets/svgs/AdminDashboardBackgroundVectorTop";
import SecondaryLogo from "@assets/svgs/SecondaryLogo";

const AppInitializer = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.authReducer);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const init = async () => {
      try {
        await Promise.all([
          dispatch(getPublicCourses()).unwrap(),
          dispatch(getFeaturedCourses()).unwrap(),
          user
            ? dispatch(getUserCourses(user._id)).unwrap()
            : Promise.resolve(),
        ]);
      } finally {
        setTimeout(() => {
          setIsInitialized(true);
        }, 1500);
      }
    };

    init();
  }, [dispatch, user]);

  if (!isInitialized) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-screen h-screen overflow-hidden relative flex justify-center items-center flex-col bg-gradient-to-r from-[#bb8f32] via-[#f6dc94] to-[#f6dc94]">
          <div className="absolute top-0 right-0">
            <AdminDashboardBackgroundVectorTop />
          </div>
          <div className="absolute bottom-0 left-0">
            <AdminDashboardBackgroundVectorBottom />
          </div>

          <div className="h-auto w-auto z-10">
            <div className="w-full h-full flex justify-center items-center">
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [1, 0.85, 1],
                }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <SecondaryLogo height={120} width={120} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default AppInitializer;
