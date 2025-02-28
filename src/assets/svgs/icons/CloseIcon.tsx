import React from "react";

interface CloseIconProps {
  width?: number;
  height?: number;
  customStyle?: string;
  color?: string;
}

const CloseIcon: React.FC<CloseIconProps> = ({
  width = 12,
  height = 12,
  customStyle = "",
  color = "#BB8F32",
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={customStyle}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 14"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
      />
    </svg>
  );
};

export default CloseIcon;
