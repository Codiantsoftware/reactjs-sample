import { en } from "../constant/en";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const optionsLanguageDetector = {
    order: ["localStorage"],
    lookupLocalStorage: `${import.meta.env.VITE_NAME_KEY}:language`,
    caches: ["localStorage"]
};

const resources = {
    en: {
        translation: {
            ...en
        }
    },
    fr: {
        translation: {
            "Welcome to React": "Bienvenue à React et react-i18next"
        }
    }
};

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources,
        fallbackLng: 'en',
        debug: import.meta.env.NODE_ENV === "development",
        detection: optionsLanguageDetector,
        interpolation: {
            escapeValue: false,
        },
    });


export default i18n;