import ShopLayout from "@shop/hoc/ShopLayout";
import { Trans, useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import InstagramIcon from "@assets/svgs/icons/InstagramIcon";
import MailIcon from "@assets/svgs/icons/MailIcon";
import PhoneIcon from "@assets/svgs/icons/PhoneIcon";
import TiktokIcon from "@assets/svgs/icons/TikTokIcon";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/store";
import { resetContactState, sendContactForm } from "@store/slices/contactSlice";
import { toast } from "react-toastify";
import { motion, easeOut } from "framer-motion";

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

  const dispatch = useDispatch<AppDispatch>();
  const { success, error } = useSelector(
    (state: RootState) => state.contactSlice
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(sendContactForm(formData));
  };

  useEffect(() => {
    if (success) {
      toast.success(t("message_sent"));
      dispatch(resetContactState());
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
    }
    if (error) {
      toast.error(error);
    }
  }, [success, error, dispatch]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  return (
    <ShopLayout>
      <motion.div
        className="w-full flex flex-col lg:flex-row justify-center items-stretch p-6 sm:p-10 lg:mt-36 mb-10 gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="w-full lg:w-1/3 flex justify-center items-center"
          variants={fadeInUp}
        >
          <img
            src="https://res.cloudinary.com/dlxgsnyid/image/upload/v1759018740/Contact_me_1_tiafsc.png"
            alt="Teodora Grubor"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </motion.div>

        <motion.div
          className="w-full lg:w-1/3 flex flex-col justify-center gap-6"
          variants={fadeInUp}
        >
          <div>
            <h1 className="font-malayalam text-3xl sm:text-4xl md:text-5xl text-[#251D18] mb-6">
              {t("contact_title")}
            </h1>
            <p className="text-lg mb-4">{t("contact_social")}</p>

            <div className="flex flex-col gap-3 text-lg mb-6">
              <div className="flex items-center gap-2">
                <a
                  className="cursor-pointer flex justify-center items-center gap-3"
                  href={"https://instagram.com/teodora.makeup"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon />
                  <span>@teodora.makeup</span>
                </a>
              </div>
              <div className="flex items-center gap-2">
                <a
                  className="cursor-pointer flex justify-center items-center gap-3"
                  href={"https://tiktok.com/@teodoragrubor"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TiktokIcon />
                  <span>Teodora Grubor</span>
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MailIcon />
                <span>teodora.grubor@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon />
                <span>+381 65 980 5580</span>
              </div>
            </div>

            <p className="text-lg mb-4">
              <Trans
                i18nKey="contact_content"
                components={{ bold: <strong /> }}
              />
            </p>

            <button
              onClick={() =>
                window.open(
                  "https://wa.me/+381659805580?text=" +
                    encodeURIComponent("Hello 👋"),
                  "_blank"
                )
              }
              className="w-full font-semibold bg-black hover:bg-[linear-gradient(274.47deg,#BB8F32_1.53%,#F6DC94_167.81%)] rounded-lg py-2 text-white cursor-pointer transition"
            >
              {t("contact_wa")}
            </button>

            <p className="text-lg mb-4 mt-4">
              <Trans
                i18nKey="contact_content2"
                components={{ bold: <strong /> }}
              />
            </p>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            className="w-full bg-white rounded-2xl shadow-md p-6 space-y-4"
            variants={fadeInUp}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                name="firstName"
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
              className="w-full bg-black text-white font-semibold py-2 px-4 rounded-lg hover:bg-[linear-gradient(274.47deg,#BB8F32_1.53%,#F6DC94_167.81%)] transition cursor-pointer"
            >
              {t("send")}
            </button>
          </motion.form>
        </motion.div>
      </motion.div>
    </ShopLayout>
  );
};

export default Contact;
