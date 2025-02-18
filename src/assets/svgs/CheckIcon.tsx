const KeyIcon = ({ width = 20, height = 16 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 8L8 14L18 2"
        stroke="#BB8F32"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default KeyIcon;
