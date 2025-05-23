const KeyIcon = ({ width = 24, height = 24 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 17C8.15196 16.9985 9.26816 16.5998 10.1604 15.8711C11.0526 15.1424 11.6663 14.1284 11.898 13H14V15H16V13H18V16H20V13H21V11H11.898C11.6663 9.87158 11.0526 8.85755 10.1604 8.1289C9.26816 7.40025 8.15196 7.00154 7 7C4.243 7 2 9.243 2 12C2 14.757 4.243 17 7 17ZM7 9C8.654 9 10 10.346 10 12C10 13.654 8.654 15 7 15C5.346 15 4 13.654 4 12C4 10.346 5.346 9 7 9Z"
        fill="#BB8F32"
      />
    </svg>
  );
};

export default KeyIcon;
