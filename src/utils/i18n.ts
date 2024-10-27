import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      example: 'example',
      buttonExample: 'Click',
      inputErrorExample: 'This field is required',
    },
  },
  fr: {
    translation: {
      example: 'example French',
      buttonExample: 'Click French',
      inputErrorExample: 'This field is required',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
