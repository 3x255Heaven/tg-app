import { ReactNode } from "react";
import InstagramIcon from "@assets/svgs/InstagramIcon";
import MailIcon from "@assets/svgs/MailIcon";
import PhoneIcon from "@assets/svgs/PhoneIcon";
import PrimaryLogo from "@assets/svgs/PrimaryLogo";
import TikTokIcon from "@assets/svgs/TikTokIcon";
import YoutubeIcon from "@assets/svgs/YoutubeIcon";
import brandImage from "@assets/tg.png";

interface ShopLayoutProps {
  children?: ReactNode;
}

const ShopLayout: React.FC<ShopLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center font-montserrat">
      <div className="w-full flex-col items-center hidden xl:flex">
        <div className="flex justify-between items-center py-4 px-20 w-full h-14 bg-[#231F20]">
          <div className="flex">
            <div className="w-full flex justify-center items-center px-4 pl-0">
              <PhoneIcon />
              <span className="text-white ml-2 text-sm">+381647435987</span>
            </div>
            <div className="w-full flex justify-center items-center border-l border-white px-4">
              <MailIcon width={20} height={20} />
              <span className="text-white ml-2 text-sm">
                teodoragrubor@gmail.com
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            <TikTokIcon customStyle="cursor-pointer" />
            <InstagramIcon customStyle="cursor-pointer" />
            <YoutubeIcon customStyle="cursor-pointer" />
          </div>
        </div>
        <div className="flex justify-between items-center py-4 px-20 w-full bg-white shadow-[0px_4px_21.9px_0px_#00000012]">
          <div className="flex items-center gap-5">
            <PrimaryLogo width={38} height={50} />
            <div>
              <img
                className="w-[316px] h-[20px]"
                src={brandImage}
                alt="Description"
              />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <span className="cursor-pointer">Home</span>
            <span className="cursor-pointer">About Us</span>
            <span className="cursor-pointer">Our Courses</span>
            <span className="cursor-pointer">Contact Us</span>
            <span className="bg-[linear-gradient(274.47deg,#BB8F32_1.53%,#F6DC94_167.81%)] h-[2rem] w-[6rem] rounded-full border-0 text-white font-poppins text-[16px] cursor-pointer flex justify-center items-center text-center">
              Log In
            </span>
            <span className="bg-white h-[2rem] w-[6rem] rounded-full border border-[#BB8F32] text-[#BB8F32] font-poppins text-[16px] cursor-pointer flex justify-center items-center text-center">
              Register
            </span>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default ShopLayout;
