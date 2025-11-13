import { ReactNode } from "react";
import Navigation from "@shop/components/navigation/Navigation";
import Footer from "../components/Footer";

interface ShopLayoutProps {
  children?: ReactNode;
}

const ShopLayout: React.FC<ShopLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center font-montserrat relative">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};

export default ShopLayout;
