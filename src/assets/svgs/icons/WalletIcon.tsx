import React from "react";

interface WalletIconProps {
  width?: number;
  height?: number;
  customStyle?: string;
  isActive?: boolean;
}

const WalletIcon: React.FC<WalletIconProps> = ({
  width = 22,
  height = 22,
  customStyle = "",
  isActive = false,
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={customStyle}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_46_2282)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17 15.3332H21V13.9999H17V15.3332ZM19.6667 7.33321H1V20.6665C1 21.4025 1.59733 21.9999 2.33333 21.9999H19.6667C20.4027 21.9999 21 21.4025 21 20.6665V16.6665H16.3333C15.9653 16.6665 15.6667 16.3685 15.6667 15.9999V13.3332C15.6667 12.9652 15.9653 12.6665 16.3333 12.6665H21V8.66654C21 7.93054 20.4027 7.33321 19.6667 7.33321ZM19.6667 1.33321C19.6667 0.964542 19.5093 0.760534 19.1667 0.625201C18.9027 0.520534 18.646 0.583209 18.3333 0.666542L1 5.99988H19.6667V1.33321Z"
          fill={isActive ? "white" : "#4F4F4F"}
        />
      </g>
      <defs>
        <clipPath id="clip0_46_2282">
          <rect
            width={width}
            height={height}
            fill={isActive ? "white" : "#4F4F4F"}
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default WalletIcon;
