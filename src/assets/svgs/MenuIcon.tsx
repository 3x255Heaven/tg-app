import React from "react";

interface MenuIconProps {
  width?: number;
  height?: number;
  customStyle?: string;
  color?: string;
}

const MenuIcon: React.FC<MenuIconProps> = ({
  width = 29,
  height = 22,
  customStyle = "",
  color = "#BB8F32",
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={customStyle}
      viewBox="0 0 29 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1H27.6667M1 11H17.6667M1 21H9.33333"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MenuIcon;
