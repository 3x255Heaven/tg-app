import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const About = () => {
  const { t } = useTranslation();

  const images = [
    "https://res.cloudinary.com/dlxgsnyid/image/upload/v1759007382/About1_xq1jx4.jpg",
    "https://res.cloudinary.com/dlxgsnyid/image/upload/v1759007383/About2_pldfdm.jpg",
    "https://res.cloudinary.com/dlxgsnyid/image/upload/v1759008263/About3_dnaazt.png",
    "https://res.cloudinary.com/dlxgsnyid/image/upload/v1759008257/About4_hyugde.png",
    "https://res.cloudinary.com/dlxgsnyid/image/upload/v1759008258/About5_j45un2.png",
    "https://res.cloudinary.com/dlxgsnyid/image/upload/v1759008258/About6_b2kcq1.png",
    "https://res.cloudinary.com/dlxgsnyid/image/upload/v1759008255/About7_lmdvxe.png",
  ];

  return (
    <div className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-16 pb-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="font-malayalam text-3xl sm:text-4xl md:text-5xl text-[#251D18] 
                   [text-shadow:0px_4px_5px_#BB8F3259] mb-10 text-center"
      >
        {t("about_me")}
      </motion.h2>

      <div className="w-full flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10">
        <div className="w-full lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 auto-rows-[120px] sm:auto-rows-[150px] md:auto-rows-[200px] gap-3">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{
                duration: 0.3,
                delay: 0.2,
                ease: "easeOut",
              }}
              className={`overflow-hidden rounded-xl shadow-md ${
                idx % 4 === 0 ? "row-span-2" : "row-span-1"
              }`}
            >
              <img
                src={src}
                alt={`about collage ${idx}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.2 }}
          className="w-full lg:w-1/3 flex flex-col justify-center self-center text-center lg:text-left"
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-sm sm:text-base leading-relaxed whitespace-pre-line flex flex-col gap-8"
          >
            <span>
              “<span className="font-bold">{t("about1")}</span>
            </span>
            <span>
              {t("about2")} <span className="font-bold">{t("about3")}</span>.
            </span>
            <span>{t("about4")}</span>
            <span>{t("about5")}</span>
            <span>{t("about6")}</span>
            <span>{t("about7")}</span>
            <span>{t("about8")}</span>
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
