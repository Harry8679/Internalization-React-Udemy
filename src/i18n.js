import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: "Welcome to the App",
        about: "About Us",
        contact: "Contact Us",
        login: "Login",
        register: "Register",
      },
    },
    fr: {
      translation: {
        welcome: "Bienvenue dans l'application",
        about: "À propos de nous",
        contact: "Nous contacter",
        login: "Connexion",
        register: "S'inscrire",
      },
    },
  },
  lng: 'en', // Langue par défaut
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;