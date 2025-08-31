import Spinner from "@assets/svgs/Spinner";
import AdminDashboardBackgroundLayer from "@dashboard/hoc/AdminDashboardBackgroundLayer";
import { getCheckoutData } from "@store/slices/checkoutSlice";
import { AppDispatch, RootState } from "@store/store";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { t, i18n } = useTranslation();

  console.log(i18n.language);

  const cart = useSelector((state: RootState) => state.authReducer.cart);
  const { loading, data } = useSelector(
    (state: RootState) => state.checkoutSlice
  );

  const cartTotal = cart.reduce(
    (total: number, course: any) => total + (course.price - course.discount),
    0
  );

  useEffect(() => {
    if (cart && cart.length > 0) {
      dispatch(
        getCheckoutData({
          courseIds: cart.map((item: any) => item._id),
          amount: cartTotal,
          returnUrl: `${window.location.origin}/checkout-success`,
          cancelUrl: `${window.location.origin}`,
          errorUrl: `${window.location.origin}/checkout-error`,
          lang: i18n.language.toUpperCase(),
          currencyCode: 941,
        })
      );
    }
  }, [cart]);

  return (
    <AdminDashboardBackgroundLayer>
      {loading ? (
        <div className="w-full h-[340px] flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div className="flex flex-col gap-8 max-h-[76vh] w-[50vw] overflow-y-auto items-center justify-start p-10 rounded-[12px] shadow-[0px_4px_30px_0px_#00000026] bg-white">
          {cart.map((course: any) => (
            <div
              key={course._id}
              className="flex justify-between items-center w-full"
            >
              <img
                className="rounded-lg h-[100px] sm:h-[120px] w-[100px] sm:w-[120px] object-cover"
                src={course.imageUrl}
                alt={course.name}
              />
              <div className="px-4 flex flex-col justify-center gap-2 flex-grow">
                <span className="font-bold text-black text-sm sm:text-md">
                  {course.name}
                </span>
                {course.discount > 0 && (
                  <span className="text-[#bebebc] text-[14px] line-through">
                    {course.price}.00 RSD
                  </span>
                )}
                <span className="text-[#BB8F32] font-bold text-[16px] sm:text-[18px]">
                  {course.discount
                    ? course.price - course.discount
                    : course.price}
                  .00 RSD
                </span>
              </div>
            </div>
          ))}
          <div className="w-full bg-white p-4 border-t rounded border-[#BB8F32] shadow-md">
            <div className="flex justify-between font-semibold text-lg">
              <span>{t("total")}</span>
              <span className="text-[#BB8F32]">{cartTotal}.00 RSD</span>
            </div>
          </div>

          {data && data.result && (
            <div className="w-full flex justify-center items-center">
              <div
                className="bg-gradient-to-r from-[#bb8f32] to-[#f6dc94] via-[#bb8f32] h-[45px] w-full rounded-full border-0 text-white font-poppins text-[18px] font-bold flex justify-center items-center text-center cursor-pointer"
                onClick={(e) => {
                  const form = e.currentTarget.querySelector(
                    "form"
                  ) as HTMLFormElement | null;
                  form?.submit();
                }}
              >
                <div dangerouslySetInnerHTML={{ __html: data.result }} />
              </div>
            </div>
          )}

          <div
            className="text-[#bb8f32] font-bold font-poppins self-center text-[18px] cursor-pointer flex justify-center items-center"
            onClick={() => {
              navigate("/");
            }}
          >
            <span className="text-[20px] h-[36px] mr-2">&#8592;</span>
            <span>{t("go_back")}</span>
          </div>
        </div>
      )}
    </AdminDashboardBackgroundLayer>
  );
};

export default Checkout;
