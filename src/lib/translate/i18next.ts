import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "./languages/en";
import { ptBR } from "./languages/pt-br";


i18n.use(initReactI18next).init({
  debug: true,
  lng: "ptBR",
  fallbackLng: "en",
  resources: {
    en: { translation: en },
    ptBR: { translation: ptBR },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
