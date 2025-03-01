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
        footer: 'All rights reserved' 
      } 
    },
  fr: { 
    translation: 
    { 
      home: 'Accueil', 
      about: 'À Propos', 
      contact: 'Contact', 
      footer: 'Tous droits réservés' 
    } 
  },
  es: { 
    translation: 
    { 
      home: 'Inicio', 
      about: 'Sobre Nosotros', 
      contact: 'Contacto', 
      footer: 'Todos los derechos reservados' 
    } 
  },
  de: { 
    translation: 
    { 
      home: 'Startseite', 
      about: 'Über uns', 
      contact: 'Kontakt', 
      footer: 'Alle Rechte vorbehalten' 
    } 
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('language') || 'fr',
  interpolation: { escapeValue: false },
});

export default i18n;