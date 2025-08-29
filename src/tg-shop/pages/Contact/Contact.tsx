import ShopLayout from "@shop/hoc/ShopLayout";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import InstagramIcon from "@assets/svgs/icons/InstagramIcon";
import MailIcon from "@assets/svgs/icons/MailIcon";
import PhoneIcon from "@assets/svgs/icons/PhoneIcon";
import TiktokIcon from "@assets/svgs/icons/TikTokIcon";
import contactMe from "@assets/brand/contactme.png";

const Contact = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: connect to backend/email
  };

  return (
    <ShopLayout>
      <div className="w-full flex flex-col sm:flex-row justify-center items-start p-6 sm:p-10 mt-36 mb-10 gap-10">
        <div className="w-full sm:w-1/2 flex justify-center">
          <img
            src={contactMe}
            alt="Teodora Grubor"
            className="max-w-md rounded-2xl shadow-lg"
          />
        </div>

        <div className="w-full sm:w-1/2 flex flex-col items-start gap-6">
          <div>
            <h1 className="font-malayalam text-3xl sm:text-4xl md:text-5xl text-[#251D18] mb-6">
              {t("contact_title")}
            </h1>
            <p className="text-lg mb-4">{t("contact_social")}</p>

            <div className="flex flex-col gap-3 text-lg mb-6">
              <div className="flex items-center gap-2">
                <InstagramIcon />
                <span>@teodora.makeup</span>
              </div>
              <div className="flex items-center gap-2">
                <TiktokIcon />
                <span>Teodora Grubor</span>
              </div>
              <div className="flex items-center gap-2">
                <MailIcon />
                <span>teodora.grubor@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon />
                <span>+381 65 980 5580</span>
              </div>
            </div>

            <p className="text-lg mb-4">{t("contact_content")}</p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-full bg-white rounded-2xl shadow-md p-6 space-y-4"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                name="name"
                placeholder={t("first_name")}
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border-b border-gray-300 rounded-lg px-4 py-2"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder={t("last_name")}
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border-b border-gray-300 rounded-lg px-4 py-2"
                required
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder={t("email")}
              value={formData.email}
              onChange={handleChange}
              className="w-full border-b border-gray-300 rounded-lg px-4 py-2"
              required
            />

            <textarea
              name="message"
              placeholder={t("message")}
              value={formData.message}
              onChange={handleChange}
              className="w-full border-b border-gray-300 rounded-lg px-4 py-2 h-32 resize-none"
              required
            />

            <button
              type="submit"
              className="w-full bg-[#cb4139] text-white font-semibold py-2 px-4 rounded-lg hover:bg-black transition cursor-pointer"
            >
              {t("send")}
            </button>
          </form>
        </div>
      </div>
    </ShopLayout>
  );
};

export default Contact;
