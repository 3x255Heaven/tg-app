import CloseIcon from "@assets/svgs/icons/CloseIcon";
import { useEffect, useRef } from "react";

const Cart = ({ isActive, closeCart }: any) => {
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
      className={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-80 ${
        isActive ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button
        type="button"
        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 start-2.5 flex items-center justify-center"
        onClick={closeCart}
      >
        <CloseIcon />
      </button>
    </div>
  );
};

export default Cart;
