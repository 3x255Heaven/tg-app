import AdminDashboardBackgroundLayer from "@dashboard/hoc/AdminDashboardBackgroundLayer";
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const CheckoutSuccess: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <AdminDashboardBackgroundLayer>
      <div className="flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold text-black mb-4">{t("thank_you")}</h1>
        <p className="text-lg text-black mb-6">{t("checkout_success")}</p>
        <button
          onClick={() => navigate("/my-courses")}
          className="px-6 py-3 bg-white text-black rounded-lg cursor-pointer transition"
        >
          {t("go_to_courses")}
        </button>
      </div>
    </AdminDashboardBackgroundLayer>
  );
};

export default CheckoutSuccess;
