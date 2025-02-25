import React from "react";

interface InstagramIconProps {
  width?: number;
  height?: number;
  customStyle?: string;
  color?: string;
}

const InstagramIcon: React.FC<InstagramIconProps> = ({
  width = 20,
  height = 20,
  customStyle = "",
  color = "#BB8F32",
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={customStyle}
      viewBox="0 0 25 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.708 2.16667H7.29134C4.41486 2.16667 2.08301 4.5918 2.08301 7.58334V18.4167C2.08301 21.4082 4.41486 23.8333 7.29134 23.8333H17.708C20.5845 23.8333 22.9163 21.4082 22.9163 18.4167V7.58334C22.9163 4.5918 20.5845 2.16667 17.708 2.16667Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.6662 12.3175C16.7948 13.2191 16.6467 14.1399 16.243 14.9489C15.8394 15.758 15.2007 16.414 14.4179 16.8238C13.6351 17.2336 12.7479 17.3762 11.8826 17.2314C11.0174 17.0866 10.218 16.6617 9.59832 16.0172C8.97861 15.3727 8.57009 14.5414 8.43085 13.6416C8.29162 12.7417 8.42877 11.819 8.82279 11.0049C9.21681 10.1907 9.84764 9.52654 10.6256 9.10675C11.4035 8.68696 12.2889 8.53296 13.1558 8.66666C14.0401 8.80303 14.8588 9.23158 15.4909 9.88899C16.123 10.5464 16.5351 11.3978 16.6662 12.3175Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.2295 7.04167H18.2434"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default InstagramIcon;
