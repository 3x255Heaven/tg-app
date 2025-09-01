import { ReactNode, useEffect } from "react";

import { AppDispatch, RootState } from "@store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  getFeaturedCourses,
  getPublicCourses,
  getUserCourses,
} from "@store/slices/courseSlice";

import Navigation from "@shop/components/navigation/Navigation";
import Footer from "../components/Footer";

interface ShopLayoutProps {
  children?: ReactNode;
}

const ShopLayout: React.FC<ShopLayoutProps> = ({ children }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.authReducer);

  useEffect(() => {
    dispatch(getPublicCourses());
    dispatch(getFeaturedCourses());

    if (user) {
      dispatch(getUserCourses(user._id));
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center font-montserrat relative">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};

export default ShopLayout;
