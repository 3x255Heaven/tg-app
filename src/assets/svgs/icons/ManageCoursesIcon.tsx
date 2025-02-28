import React from "react";

interface ManageCoursesIconProps {
  width?: number;
  height?: number;
  customStyle?: string;
  isActive?: boolean;
  color?: string;
}

const ManageCoursesIcon: React.FC<ManageCoursesIconProps> = ({
  width = 22,
  height = 22,
  customStyle = "",
  isActive = false,
  color,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      className={customStyle}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_46_2264)">
        <path
          d="M13.8125 4.35352V21.0013C13.8125 22.6575 15.1551 24.0002 16.8113 24.0002H19.4011C21.0573 24.0002 22.4 22.6575 22.4 21.0013V4.35352H13.8125Z"
          fill={color ? color : isActive ? "white" : "#4F4F4F"}
        />
        <path
          d="M8.11405 6.16997V1.36645L3.67316 0V6.16997H2.67383V8.86955H9.11338V6.16997H8.11405Z"
          fill={color ? color : isActive ? "white" : "#4F4F4F"}
        />
        <path
          d="M1.60059 10.4346V21.0009C1.60059 22.6571 2.94323 23.9998 4.59946 23.9998H7.18926C8.84544 23.9998 10.188 22.6572 10.188 21.0009V10.4346H1.60059Z"
          fill={color ? color : isActive ? "white" : "#4F4F4F"}
        />
      </g>
      <defs>
        <clipPath id="clip0_46_2264">
          <rect
            width={width}
            height={height}
            fill={color ? color : isActive ? "white" : "#4F4F4F"}
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ManageCoursesIcon;
