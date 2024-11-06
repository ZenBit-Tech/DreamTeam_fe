import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcomeMessage: "Welcome to Smartporters! 👋",
      signInPrompt: "Please sign in to your account and start the delivery",
      emailLabel: "Email",
    },
  },
  fr: {
    translation: {
      welcomeMessage: "Bienvenue chez Smartporters! 👋",
      signInPrompt: "Veuillez vous connecter à votre compte et commencer la livraison",
      emailLabel: "E-mail"
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
