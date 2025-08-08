import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "./languages/en";

i18n.use(initReactI18next).init({
  debug: true,
  lng: "en",
  fallbackLng: "en",
  resources: {
    en: { translation: en },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
