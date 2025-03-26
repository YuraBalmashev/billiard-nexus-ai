
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import enTranslation from './locales/en.json';
import ruTranslation from './locales/ru.json';

// Initialize i18next
i18n
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      ru: {
        translation: ruTranslation
      }
    },
    fallbackLng: 'en',
    debug: false, // Set to true for development

    interpolation: {
      escapeValue: false, // React already escapes values
    },

    // Persist language selection
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'billman_language',
      caches: ['localStorage'],
    }
  });

export default i18n;
