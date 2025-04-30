import { generalRoutes } from "@routes";
import { RootState } from "@store/store";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { user } = useSelector((state: RootState) => state.authReducer);
  const location = useLocation();

  if (!user) {
    return (
      <Navigate to={generalRoutes.LOGIN} replace state={{ from: location }} />
    );
  }

  return children;
};

export default ProtectedRoute;
