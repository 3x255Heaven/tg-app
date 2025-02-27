const ReviewItem = ({ image, details, name }: any) => {
  return (
    <div className="relative flex justify-center">
      <div className="relative w-full py-16">
        <div className="w-full flex justify-center items-center">
          <div className="absolute mb-12 w-full max-w-[220px] border border-[#BB8F32] p-1.5 rounded-t-full left-50 top-0">
            <img src={image} alt="image" className="w-full rounded-t-full" />
          </div>
          <div className="w-1/2 bg-[#F7EEB8] pl-24 p-10 rounded-md">
            <div className="flex flex-col">
              <span className="mb-10 italic ">{details}</span>
              <span className="mb-2 text-[22px] font-semibold leading-[27px] text-dark">
                {name}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
