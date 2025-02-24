import React from "react";

interface PrivacyPolicyIconProps {
  width?: number;
  height?: number;
  customStyle?: string;
  isActive?: boolean;
}

const PrivacyPolicyIcon: React.FC<PrivacyPolicyIconProps> = ({
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
      viewBox="0 0 22 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.566 11.4717C9.66038 11.4717 9.0566 12.0755 9.0566 12.9811C9.0566 13.5849 9.50943 14.0377 9.96227 14.1887L9.50943 16.3019H11.4717L11.0189 14.1887C11.6226 14.0377 11.9245 13.5849 11.9245 12.9811C12.0755 12.0755 11.4717 11.4717 10.566 11.4717ZM10.717 4.98113C9.66038 4.98113 8.60377 5.73585 8.60377 6.79245V9.0566H12.6792V6.79245C12.5283 5.73585 11.7736 4.98113 10.717 4.98113ZM10.566 0L0 4.5283V9.0566C0.150943 15.6981 4.37736 21.5849 10.566 24C16.7547 21.5849 20.9811 15.6981 21.1321 9.0566V4.5283L10.566 0ZM16.6038 16.6038C16.6038 17.5094 16 18.1132 15.0943 18.1132H6.03774C5.13208 18.1132 4.5283 17.5094 4.5283 16.6038V10.566C4.5283 9.66038 5.13208 9.0566 6.03774 9.0566H6.49057V6.79245C6.64151 4.67925 8.45283 3.01887 10.566 3.01887C12.6792 3.01887 14.4906 4.67925 14.6415 6.79245V9.0566H15.0943C16 9.0566 16.6038 9.66038 16.6038 10.566V16.6038Z"
        fill={isActive ? "white" : "#4F4F4F"}
      />
    </svg>
  );
};

export default PrivacyPolicyIcon;
