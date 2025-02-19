import React from "react";

interface DotsIconProps {
  width?: number;
  height?: number;
  customStyle?: string;
  color?: string;
}

const DotsIcon: React.FC<DotsIconProps> = ({
  width = 20,
  height = 20,
  customStyle = "",
  color = "#FFF",
}) => {
  return (
    <svg
      width={width}
      height={height}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      className={customStyle}
      fill={color}
      viewBox="0 0 4 15"
    >
      <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
    </svg>
  );
};

export default DotsIcon;
