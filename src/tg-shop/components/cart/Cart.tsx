import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { dispatch, RootState } from "@store/store";
import { removeFromCart } from "@store/slices/authSlice";
import { Course } from "@store/slices/courseSlice";

import DeleteIcon from "@assets/svgs/icons/DeleteIcon";
import CloseIcon from "@assets/svgs/icons/CloseIcon";
import CartIcon from "@assets/svgs/icons/CartIcon";

interface CartProps {
  isActive: boolean;
  closeCart: () => void;
}

const Cart = ({ isActive, closeCart }: CartProps) => {
  const navigate = useNavigate();
  const cart = useSelector(
    (state: RootState) => state.authReducer.cart as Course[]
  );

  const { t } = useTranslation();
  const cartRef = useRef<HTMLDivElement>(null);

  const cartTotal = cart.reduce(
    (total, course) => total + (course.price - course.discount),
    0
  );

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
      className={`fixed top-0 right-0 h-screen flex flex-col transition-transform bg-white shadow-lg 
      w-96 sm:w-[420px] md:w-[480px] lg:w-[520px] xl:w-[600px] z-50
      ${isActive ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="flex justify-between items-center border-b border-[#BB8F32] p-4">
        <span className="font-bold text-[#BB8F32] text-lg">{t("cart")}</span>
        <button
          aria-label={t("close_cart")}
          type="button"
          className="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 flex items-center justify-center"
          onClick={closeCart}
        >
          <CloseIcon />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10 text-gray-500">
            <span className="text-lg font-semibold">
              {t("your_cart_is_empty")}
            </span>
            <span className="text-sm">{t("add_items_to_cart")}</span>
          </div>
        ) : (
          cart.map((course) => (
            <div key={course._id} className="flex justify-between items-center">
              <img
                className="rounded-lg h-[100px] sm:h-[120px] w-[100px] sm:w-[120px] object-cover"
                src={course.imageUrl}
                alt={course.name}
              />
              <div className="px-4 flex flex-col gap-2 flex-grow">
                <span className="font-bold text-black text-sm sm:text-md">
                  {course.name}
                </span>
                {course.discount > 0 && (
                  <span className="text-[#bebebc] text-[14px] line-through">
                    {course.price}.00 RSD
                  </span>
                )}
                <span className="text-[#BB8F32] font-bold text-[16px] sm:text-[18px]">
                  {course.price - course.discount}.00 RSD
                </span>
              </div>
              <button
                aria-label={t("remove_item")}
                className="text-red-500 hover:text-red-600 border border-red-500 bg-red-100 p-3 rounded-md"
                onClick={() => dispatch(removeFromCart(course._id))}
              >
                <DeleteIcon />
              </button>
            </div>
          ))
        )}
      </div>
      <div className="border-t border-[#BB8F32] shadow-md p-4">
        {cart.length > 0 ? (
          <>
            <div className="flex justify-between font-semibold text-lg">
              <span>{t("total")}</span>
              <span className="text-[#BB8F32]">{cartTotal}.00 RSD</span>
            </div>
            <button
              className="mt-3 w-full bg-[#BB8F32] text-white py-2 text-lg font-bold rounded-md hover:bg-[#a3792a] transition"
              onClick={() => navigate("/checkout")}
            >
              {t("checkout")}
            </button>
          </>
        ) : (
          <button
            className="mt-3 w-full bg-[#BB8F32] text-white py-2 text-lg font-bold rounded-md hover:bg-[#a3792a] transition"
            onClick={() => navigate("/courses")}
          >
            {t("browse_courses")}
          </button>
        )}
      </div>
    </div>
  );
};

const CartWrapper = () => {
  const [isCartActive, setIsCartActive] = useState(false);
  const { cart } = useSelector((state: RootState) => state.authReducer);

  return (
    <>
      <div
        className={`${
          isCartActive ? "pointer-events-none" : ""
        } relative border border-[#BB8F32] rounded-full p-1.5 cursor-pointer`}
        onClick={() => {
          setIsCartActive(true);
        }}
      >
        <CartIcon />
        {cart?.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-[#BB8F32] text-white text-xs font-bold rounded-full pt-0.5 w-6 h-6 flex items-center justify-center">
            {cart.length}
          </span>
        )}
      </div>

      <Cart
        isActive={isCartActive}
        closeCart={() => {
          setIsCartActive(false);
        }}
      />
      {isCartActive && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={() => setIsCartActive(false)}
        />
      )}
    </>
  );
};

export { CartWrapper as Cart };
