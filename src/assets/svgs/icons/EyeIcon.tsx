import React from "react";

interface EyeIconProps {
  width?: number;
  height?: number;
  customStyle?: string;
  color?: string;
}

const EyeIcon: React.FC<EyeIconProps> = ({
  width = 18,
  height = 18,
  customStyle = "",
  color = "#E9B300",
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={customStyle}
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.89551 7C7.89551 5.91273 8.82338 5.03125 9.96788 5.03125C11.1124 5.03125 12.0402 5.91273 12.0402 7C12.0402 8.08728 11.1124 8.96875 9.96788 8.96875C8.82338 8.96875 7.89551 8.08728 7.89551 7Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.757812 7C0.757812 8.43447 1.14922 8.91756 1.93205 9.88374C3.49514 11.8128 6.1166 14 9.96834 14C13.8201 14 16.4415 11.8128 18.0046 9.88374C18.7874 8.91756 19.1789 8.43447 19.1789 7C19.1789 5.56553 18.7874 5.08246 18.0046 4.11629C16.4415 2.18712 13.8201 0 9.96834 0C6.1166 0 3.49514 2.18712 1.93205 4.11629C1.14922 5.08246 0.757812 5.56553 0.757812 7ZM9.96834 3.71875C8.06077 3.71875 6.51439 5.18781 6.51439 7C6.51439 8.81221 8.06077 10.2812 9.96834 10.2812C11.8759 10.2812 13.4223 8.81221 13.4223 7C13.4223 5.18781 11.8759 3.71875 9.96834 3.71875Z"
        fill={color}
      />
    </svg>
  );
};

export default EyeIcon;
