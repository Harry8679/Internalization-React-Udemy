// i18n.js (Langues)
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: 
    { 
      translation: 
      { 
        home: 'Home', 
        about: 'About', 
        contact: 'Contact', 
        footer: 'All rights reserved',
        aboutDescription: 'Learn more about our mission and services.',
        contactDescription: 'Feel free to contact us at any time.',
        footerMessage: 'Copyright 2025 - All rights reserved',
        welcomeMessage: 'Welcome to our app'
      } 
    },
  fr: { 
    translation: 
    { 
      home: 'Accueil', 
      about: 'À Propos', 
      contact: 'Contact', 
      footer: 'Tous droits réservés',
      aboutDescription: 'Découvrez notre mission et nos services.',
      contactDescription: 'N\'hésitez pas à nous contacter à tout moment.',
      footerMessage: 'Copyright 2025 - Tous droits réservés',
      welcomeMessage: 'Bienvenue sur notre application'
    } 
  },
  es: { 
    translation: 
    { 
      home: 'Inicio', 
      about: 'Sobre Nosotros', 
      contact: 'Contacto', 
      footer: 'Todos los derechos reservados',
      aboutDescription: 'Conoce más sobre nuestra misión y servicios.',
      contactDescription: 'No dudes en contactarnos en cualquier momento.',
      footerMessage: 'Copyright 2025 - Todos los derechos reservados',
      welcomeMessage: 'Bienvenido a nuestra aplicación'
    } 
  },
  de: { 
    translation: 
    { 
      home: 'Startseite', 
      about: 'Über uns', 
      contact: 'Kontakt', 
      footer: 'Alle Rechte vorbehalten',
      aboutDescription: 'Erfahren Sie mehr über unsere Mission und Dienstleistungen.',
      contactDescription: 'Kontaktieren Sie uns jederzeit gerne.',
      footerMessage: 'Copyright 2025 - Alle Rechte vorbehalten',
      welcomeMessage: 'Willkommen in unserer App'
    } 
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('language') || 'fr',
  interpolation: { escapeValue: false },
});

export default i18n;