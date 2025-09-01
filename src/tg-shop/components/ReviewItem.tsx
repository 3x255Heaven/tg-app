import InstagramIcon from "@assets/svgs/icons/InstagramIcon";

type ReviewItemProps = {
  image: string;
  details: string;
  name: string;
  social: string;
};

const ReviewItem = ({ image, details, name, social }: ReviewItemProps) => {
  return (
    <div className="flex justify-center">
      <div className="w-full py-8 sm:py-12 lg:py-14">
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-6 lg:gap-8">
          <div className="flex-shrink-0 basis-40 sm:basis-56 lg:basis-48 h-56 sm:h-72 lg:h-64 border border-[#BB8F32] p-1.5 rounded-t-full">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-t-full"
            />
          </div>
          <div className="flex-1 min-w-0 bg-[#F7EEB8] p-6 sm:p-8 lg:p-8 rounded-md">
            <p className="mb-6 sm:mb-8 italic text-sm sm:text-base lg:text-lg break-words">
              {details}
            </p>
            <div className="flex items-center flex-wrap gap-2">
              <span className="text-lg sm:text-xl lg:text-[22px] font-semibold leading-tight text-dark">
                {name}
              </span>
              <a
                className="cursor-pointer"
                href={social}
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon color="#000" customStyle="cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
