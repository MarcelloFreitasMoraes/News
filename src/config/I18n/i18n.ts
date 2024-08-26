import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "../locales/en";
import ptTranslations from "../locales/pt";

const resources = {
  en: enTranslations,
  pt: ptTranslations,
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", 
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, 
  },
});

export default i18n;
