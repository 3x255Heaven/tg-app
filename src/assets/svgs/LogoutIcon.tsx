import React from "react";

interface LogoutIconProps {
  width?: number;
  height?: number;
  customStyle?: string;
  color?: string;
}

const LogoutIcon: React.FC<LogoutIconProps> = ({
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
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.4998 0C19.375 0 20.2144 0.347678 20.8333 0.966548C21.4521 1.58542 21.7998 2.42479 21.7998 3.3V18.7C21.7998 19.5752 21.4521 20.4146 20.8333 21.0335C20.2144 21.6523 19.375 22 18.4998 22H11.8998C11.0246 22 10.1852 21.6523 9.56635 21.0335C8.94748 20.4146 8.5998 19.5752 8.5998 18.7V3.3C8.5998 2.42479 8.94748 1.58542 9.56635 0.966548C10.1852 0.347678 11.0246 0 11.8998 0H18.4998ZM7.17751 5.8223C6.97122 5.61608 6.69149 5.50024 6.3998 5.50024C6.10812 5.50024 5.82838 5.61608 5.6221 5.8223L1.2221 10.2223C1.01588 10.4286 0.90004 10.7083 0.90004 11C0.90004 11.2917 1.01588 11.5714 1.2221 11.7777L5.6221 16.1777C5.82957 16.3781 6.10743 16.4889 6.39585 16.4864C6.68426 16.4839 6.96016 16.3682 7.1641 16.1643C7.36805 15.9604 7.48374 15.6845 7.48625 15.396C7.48875 15.1076 7.37788 14.8298 7.17751 14.6223L4.6552 12.1H14.0998C14.3915 12.1 14.6713 11.9841 14.8776 11.7778C15.0839 11.5715 15.1998 11.2917 15.1998 11C15.1998 10.7083 15.0839 10.4285 14.8776 10.2222C14.6713 10.0159 14.3915 9.9 14.0998 9.9H4.6552L7.17751 7.3777C7.38372 7.17142 7.49957 6.89168 7.49957 6.6C7.49957 6.30832 7.38372 6.02858 7.17751 5.8223Z"
        fill={color}
      />
    </svg>
  );
};

export default LogoutIcon;
