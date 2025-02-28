import React from "react";

interface LogoutReverseIconProps {
  width?: number;
  height?: number;
  customStyle?: string;
  color?: string;
}

const LogoutReverseIcon: React.FC<LogoutReverseIconProps> = ({
  width = 38,
  height = 38,
  customStyle = "",
  color = "#BB8F32",
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={customStyle}
      viewBox="0 0 38 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.6221 10.7913C23.6034 7.43817 23.4547 5.62222 22.2701 4.43764C20.9154 3.08301 18.7352 3.08301 14.3748 3.08301H12.8331C8.47265 3.08301 6.29227 3.08301 4.93776 4.43764C3.5831 5.79227 3.5831 7.97251 3.5831 12.333V24.6663C3.5831 29.0268 3.5831 31.207 4.93776 32.5617C6.29227 33.9163 8.47265 33.9163 12.8331 33.9163H14.3748C18.7352 33.9163 20.9154 33.9163 22.2701 32.5617C23.4547 31.3771 23.6034 29.5611 23.6221 26.208"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M14.3751 18.5H34.4167M34.4167 18.5L29.0209 13.875M34.4167 18.5L29.0209 23.125"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LogoutReverseIcon;
