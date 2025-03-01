import CloseIcon from "@assets/svgs/icons/CloseIcon";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { coursesOverviewItems } from "../../mock";
import DeleteIcon from "@assets/svgs/icons/DeleteIcon";

const Cart = ({ isActive, closeCart }: any) => {
  const { t } = useTranslation();
  const cartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        closeCart();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isActive, closeCart]);

  return (
    <div
      ref={cartRef}
      className={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white shadow-lg 
      w-96 sm:w-[420px] md:w-[480px] lg:w-[520px] xl:w-[600px]
      ${isActive ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="flex justify-between items-center border-b border-[#BB8F32] pb-2">
        <span className="font-bold text-[#BB8F32] text-lg">{t("cart")}</span>
        <button
          type="button"
          className="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 cursor-pointer flex items-center justify-center"
          onClick={closeCart}
        >
          <CloseIcon />
        </button>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        {coursesOverviewItems.map((course) => (
          <div
            key={course.id}
            className="flex justify-between items-center w-full"
          >
            <img
              className="rounded-lg h-[100px] sm:h-[120px] w-[100px] sm:w-[120px] object-cover"
              src={course.image}
              alt={course.name}
            />
            <div className="px-4 flex flex-col justify-center gap-2 flex-grow">
              <span className="font-bold text-black text-sm sm:text-md">
                {course.name}
              </span>
              <span className="text-[#BB8F32] font-bold text-[16px] sm:text-[18px]">
                {course.price}
              </span>
            </div>
            <button className="text-red-500 hover:text-red-600 cursor-pointer border border-b-red-500 bg-red-100 p-4 rounded-md">
              <DeleteIcon />
            </button>
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 w-full bg-white p-4 border-t border-[#BB8F32] shadow-md">
        <div className="flex justify-between font-semibold text-lg">
          <span>{t("total")}</span>
          <span className="text-[#BB8F32]">$ 13500</span>
        </div>
        <button className="mt-3 w-full bg-[#BB8F32] text-white py-2 text-lg font-bold rounded-md hover:bg-[#a3792a] transition cursor-pointer">
          {t("checkout")}
        </button>
      </div>
    </div>
  );
};

export default Cart;
