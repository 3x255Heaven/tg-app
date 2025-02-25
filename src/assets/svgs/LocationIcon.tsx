import React from "react";

interface LocationIconProps {
  width?: number;
  height?: number;
  customStyle?: string;
  color?: string;
}

const LocationIcon: React.FC<LocationIconProps> = ({
  width = 20,
  height = 20,
  customStyle = "",
  color = "#FFF",
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={customStyle}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 31.5C23.25 26.1 28.5 21.2646 28.5 15.3C28.5 9.33532 23.799 4.5 18 4.5C12.201 4.5 7.5 9.33532 7.5 15.3C7.5 21.2646 12.75 26.1 18 31.5Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 18C19.6569 18 21 16.6569 21 15C21 13.3431 19.6569 12 18 12C16.3431 12 15 13.3431 15 15C15 16.6569 16.3431 18 18 18Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LocationIcon;
