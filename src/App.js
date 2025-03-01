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
// import './i18n.js';
import './i18n';
import './index.css';
import { i18n } from 'i18next';

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
