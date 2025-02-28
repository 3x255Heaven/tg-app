import React from "react";

interface YoutubeIconProps {
  width?: number;
  height?: number;
  customStyle?: string;
  color?: string;
}

const YoutubeIcon: React.FC<YoutubeIconProps> = ({
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
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.4186 6.95499C24.2899 6.44085 24.0279 5.96978 23.6588 5.58935C23.2898 5.20892 22.8269 4.93261 22.317 4.78833C20.4536 4.33333 13.0003 4.33333 13.0003 4.33333C13.0003 4.33333 5.54696 4.33333 3.68363 4.83166C3.17365 4.97594 2.71077 5.25226 2.34175 5.63268C1.97274 6.01311 1.71065 6.48419 1.58196 6.99833C1.24094 8.88934 1.07413 10.8077 1.08363 12.7292C1.07147 14.6651 1.23829 16.5981 1.58196 18.5033C1.72383 19.0015 1.99179 19.4546 2.35995 19.819C2.72811 20.1834 3.18402 20.4466 3.68363 20.5833C5.54696 21.0817 13.0003 21.0817 13.0003 21.0817C13.0003 21.0817 20.4536 21.0817 22.317 20.5833C22.8269 20.439 23.2898 20.1627 23.6588 19.7823C24.0279 19.4019 24.2899 18.9308 24.4186 18.4167C24.757 16.5399 24.9238 14.6362 24.917 12.7292C24.9291 10.7932 24.7623 8.86025 24.4186 6.95499Z"
        fill={color}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5625 16.2717L16.7917 12.7292L10.5625 9.18666V16.2717Z"
        fill="#231F20"
        stroke="#231F20"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default YoutubeIcon;
