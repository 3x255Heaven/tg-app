import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { SERBIAN_TRANSLATION, ENGLISH_TRANSLATION } from "@constants/languages";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",
  resources: {
    en: {
      translation: ENGLISH_TRANSLATION,
    },
    sr: {
      translation: SERBIAN_TRANSLATION,
    },
  },
});

export default i18n;
