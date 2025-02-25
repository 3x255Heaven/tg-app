import aboutImage from "@assets/about.jpg";

const About = () => {
  return (
    <div className="w-full flex justify-center items-center gap-8 pr-10 pb-10 pl-10">
      <img
        className="w-[490px] h-[570px] object-cover"
        src={aboutImage}
        alt="about"
      />
      <div className="flex flex-col w-1/4 mt-14">
        <span className="font-malayalam text-5xl text-[#251D18] [text-shadow:0px_4px_5.3px_#BB8F3259]">
          About Me
        </span>
        <span>
          I’m Teodora Grubor, and nine years ago, when I first picked up a
          makeup brush, I realized that makeup wasn’t just a hobby – it was my
          true calling. My vision was to create a space where makeup becomes
          accessible to everyone who wants to learn, grow, and contribute to the
          beauty community. Over the years, I’ve had the privilege of teaching
          talented artists from Serbia, Croatia, Bosnia and Herzegovina,
          Montenegro, North Macedonia, Slovenia, Switzerland, Germany, and even
          Thailand. I truly believe these online courses will open the door for
          even more people to unlock their creativity, refine their skills, and
          achieve their goals – whether makeup is their passion or profession.
          If you haven’t had the chance to learn from me yet, now is the perfect
          moment to spark your creativity, build confidence, and elevate your
          skills. And if you already know my work, thank you for coming back –
          it means the world to me! 💕 I’m excited for us to create something
          special together and enjoy every step of this creative journey.
        </span>
      </div>
    </div>
  );
};

export default About;
