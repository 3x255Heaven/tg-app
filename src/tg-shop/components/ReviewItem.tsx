import InstagramIcon from "@assets/svgs/icons/InstagramIcon";

const ReviewItem = ({ image, details, name, social }: any) => {
  return (
    <div className="flex justify-center">
      <div className="w-full py-16">
        <div className="w-full flex justify-center items-center gap-10">
          <div className="w-full max-w-[220px] h-[16rem] border border-[#BB8F32] p-1.5 rounded-t-full">
            <img
              src={image}
              alt="image"
              className="w-full h-full object-cover rounded-t-full"
            />
          </div>
          <div className="w-1/2 bg-[#F7EEB8] p-10 rounded-md">
            <div className="flex flex-col">
              <span className="mb-10 italic ">{details}</span>
              <div className="flex text-center items-center">
                <span className="text-[22px] font-semibold leading-[27px] text-dark">
                  {name}
                </span>
                <a
                  className="cursor-pointer ml-2"
                  href={social}
                  target="_blank"
                >
                  <InstagramIcon color="#000" customStyle="cursor-pointer" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
