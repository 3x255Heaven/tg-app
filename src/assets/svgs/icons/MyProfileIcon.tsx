import React from "react";

interface MyProfileIconProps {
  width?: number;
  height?: number;
  customStyle?: string;
  color?: string;
}

const MyProfileIcon: React.FC<MyProfileIconProps> = ({
  width = 18,
  height = 18,
  customStyle = "",
  color = "#BB8F32",
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={customStyle}
      viewBox="0 0 17 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.48898 7.76018C10.6192 7.76018 12.3461 6.03328 12.3461 3.90304C12.3461 1.77281 10.6192 0.0458984 8.48898 0.0458984C6.35874 0.0458984 4.63184 1.77281 4.63184 3.90304C4.63184 6.03328 6.35874 7.76018 8.48898 7.76018Z"
        fill={color}
      />
      <path
        d="M16.203 14.1892C16.203 12.0589 14.4761 10.332 12.3458 10.332H4.63156C2.50132 10.332 0.774414 12.0589 0.774414 14.1892V18.0463H16.203V14.1892Z"
        fill={color}
      />
    </svg>
  );
};

export default MyProfileIcon;
