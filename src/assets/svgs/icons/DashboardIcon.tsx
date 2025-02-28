import React from "react";

interface DashboardIconProps {
  width?: number;
  height?: number;
  customStyle?: string;
  isActive?: boolean;
}

const DashboardIcon: React.FC<DashboardIconProps> = ({
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
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.37467 2.08301H4.16634C3.01575 2.08301 2.08301 3.01575 2.08301 4.16634V11.458C2.08301 12.6086 3.01575 13.5413 4.16634 13.5413H9.37467C10.5253 13.5413 11.458 12.6086 11.458 11.458V4.16634C11.458 3.01575 10.5253 2.08301 9.37467 2.08301Z"
        fill={isActive ? "white" : "#4F4F4F"}
      />
      <path
        d="M20.8337 2.08301H15.6253C14.4747 2.08301 13.542 3.01575 13.542 4.16634V7.29134C13.542 8.44193 14.4747 9.37467 15.6253 9.37467H20.8337C21.9843 9.37467 22.917 8.44193 22.917 7.29134V4.16634C22.917 3.01575 21.9843 2.08301 20.8337 2.08301Z"
        fill={isActive ? "white" : "#4F4F4F"}
      />
      <path
        d="M9.37467 15.625H4.16634C3.01575 15.625 2.08301 16.5577 2.08301 17.7083V20.8333C2.08301 21.9839 3.01575 22.9167 4.16634 22.9167H9.37467C10.5253 22.9167 11.458 21.9839 11.458 20.8333V17.7083C11.458 16.5577 10.5253 15.625 9.37467 15.625Z"
        fill={isActive ? "white" : "#4F4F4F"}
      />
      <path
        d="M20.8337 11.458H15.6253C14.4747 11.458 13.542 12.3907 13.542 13.5413V20.833C13.542 21.9836 14.4747 22.9163 15.6253 22.9163H20.8337C21.9843 22.9163 22.917 21.9836 22.917 20.833V13.5413C22.917 12.3907 21.9843 11.458 20.8337 11.458Z"
        fill={isActive ? "white" : "#4F4F4F"}
      />
    </svg>
  );
};

export default DashboardIcon;
