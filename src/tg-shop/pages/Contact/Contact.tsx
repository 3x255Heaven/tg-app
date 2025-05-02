import ShopLayout from "@shop/hoc/ShopLayout";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <ShopLayout>
      <div className="w-full flex flex-col justify-center items-center p-6 sm:p-10 mt-18 mb-5">
        <div className="w-full flex flex-col justify-center items-center">
          <span className="font-malayalam text-3xl sm:text-4xl md:text-5xl text-[#251D18] [text-shadow:0px_4px_5.3px_#BB8F3259]">
            {t("where_to_find_me")}
          </span>
        </div>
        <div className="w-full h-96 mt-10">
          <iframe
            title="Shop Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2808.8427370016225!2d19.80802515017481!3d45.25097278141263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b11cbeb462577%3A0xce4b2cacbe9f03e3!2sDom%20Zdravlja%20Novi%20Sad!5e0!3m2!1sen!2srs!4v1746147470768!5m2!1sen!2srs"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </ShopLayout>
  );
};

export default Contact;
