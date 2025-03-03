import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translations from './translations.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translations.en },
      zh: { translation: translations.zh }
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    debug: true,  // Enable debug mode to see logs in the console
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;