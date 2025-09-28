const Preview = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <video
        className="w-full h-full object-cover"
        loop
        muted
        autoPlay
        playsInline
      >
        <source
          src="https://res.cloudinary.com/dlxgsnyid/video/upload/v1759006798/Home2_skcxe8.mov"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Preview;
