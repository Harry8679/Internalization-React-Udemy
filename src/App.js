// Structure complète pour un projet React + Tailwind CSS + i18next
// Projet pédagogique pour Udemy

// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import { ThemeProvider } from './context/ThemeContext';
import './i18n';
import './index.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <div className="container mx-auto p-4 min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;

// ThemeContext.jsx (Gestion Dark/Light Mode)
import { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

// i18n.js (Langues)
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: { translation: { home: 'Home', about: 'About', contact: 'Contact', footer: 'All rights reserved' } },
  fr: { translation: { home: 'Accueil', about: 'À Propos', contact: 'Contact', footer: 'Tous droits réservés' } },
  es: { translation: { home: 'Inicio', about: 'Sobre Nosotros', contact: 'Contacto', footer: 'Todos los derechos reservados' } },
  de: { translation: { home: 'Startseite', about: 'Über uns', contact: 'Kontakt', footer: 'Alle Rechte vorbehalten' } },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('language') || 'fr',
  interpolation: { escapeValue: false },
});

export default i18n;
