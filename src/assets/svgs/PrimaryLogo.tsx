const PrimaryLogo = ({ width = 146, height = 185 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 146 185"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.44594 0H136.946V9H85.4459V33C115.846 34.6 137.779 58.3333 144.946 70C143.279 71.1667 138.746 74.3 133.946 77.5C113.946 30.5 62.9459 39.5 42.9459 64C18.1459 99.6 30.2793 135.833 39.4459 149.5C67.4459 185.9 108.946 176.5 121.446 165.5V115.5H93.9459V106.5H145.446V170.5C106.646 191.3 64.9459 184.5 48.9459 178.5C30.7793 171.5 -4.35406 146.3 0.445942 101.5C5.24594 56.7 42.4459 38.5 60.4459 35V9H8.44594V0Z"
        fill="url(#paint0_linear_46_6351)"
      />
      <path
        d="M60.9463 56.0002C68.5463 50.0002 80.113 48.8335 84.9463 49.0002V144H60.9463V56.0002Z"
        fill="url(#paint1_linear_46_6351)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_46_6351"
          x1="4.5"
          y1="59"
          x2="152.5"
          y2="157"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DAB868" />
          <stop offset="1" stopColor="#CAB781" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_46_6351"
          x1="84.9463"
          y1="96.4928"
          x2="60.9463"
          y2="96.4928"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CAB781" />
          <stop offset="1" stopColor="#DAB868" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default PrimaryLogo;
