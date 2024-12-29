import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import Backend from "i18next-http-backend";

// import enLang from "../../public/locales/en.json";
// import arLang from "../../public/locales/ar.json";

// const resources = {
//   en: {
//     translation: {
//       welcomeMessage: enLang,
//     },
//   },
//   ar: {
//     translation: {
//       welcomeMessage: arLang,
//     },
//   },
// };

i18n
  .use(initReactI18next)
  .use(Backend)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    // resources,
    fallbackLng: "ar",
    lng: "en",
    debug: true,
    detection: {
      order: [
        "cookie",
        "localStorage",
        "sessionStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
      ],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/locales/{{lng}}.json",
    },
  });

export default i18n;
