import AdminDashboardBackgroundLayer from "@dashboard/hoc/AdminDashboardBackgroundLayer";
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const CheckoutError: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <AdminDashboardBackgroundLayer>
      <div className="flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold text-black mb-4">{t("oops")}</h1>
        <p className="text-lg text-black mb-6">{t("checkout_error")}</p>
        <button
          onClick={() => navigate("/courses")}
          className="px-6 py-3 bg-white text-black rounded-lg transition"
        >
          {t("retry_checkout")}
        </button>
      </div>
    </AdminDashboardBackgroundLayer>
  );
};

export default CheckoutError;
