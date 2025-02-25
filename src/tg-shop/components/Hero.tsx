import heroVideo from "@assets/Hero.mp4";

const Hero = () => {
  return (
    <div className="relative">
      <video loop muted autoPlay playsInline>
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center">
        <h2 className="text-white text-7xl font-bold italic">
          “Where passion meets skills”
        </h2>
        <span className="bg-[linear-gradient(274.47deg,#BB8F32_1.53%,#F6DC94_167.81%)] h-[2rem] w-[10rem] mt-5 rounded-full border-0 text-white font-poppins text-[16px] cursor-pointer flex justify-center items-center text-center">
          Browse Courses
        </span>
      </div>
    </div>
  );
};

export default Hero;
