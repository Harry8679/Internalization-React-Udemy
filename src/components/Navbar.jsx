import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

function Navbar() {
  const { t, i18n } = useTranslation();
  const { darkMode, setDarkMode } = useTheme();
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('language') || 'en');

  const languageOptions = [
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  ];

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
    setSelectedLanguage(lang);
    setShowDropdown(false);
  };

  return (
    <nav className="p-4 bg-gray-200 dark:bg-gray-900 text-black dark:text-white flex justify-between items-center">
      <div>
        <Link to="/" className="mr-4">{t('home')}</Link>
        <Link to="/about" className="mr-4">{t('about')}</Link>
        <Link to="/contact" className="mr-4">{t('contact')}</Link>
      </div>
      <div className="relative">
        <button
          className="px-4 py-2 bg-gray-500 dark:bg-gray-700 rounded text-white flex items-center gap-2"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          {languageOptions.find(lang => lang.code === selectedLanguage)?.flag} {t('language')}
          <FaChevronDown className="text-sm" />
        </button>
        {showDropdown && (
          <ul className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 shadow-md rounded-md overflow-hidden">
            {languageOptions.map(({ code, label, flag }) => (
              <li key={code} className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer flex items-center gap-2" onClick={() => changeLanguage(code)}>
                {flag} {label}
              </li>
            ))}
          </ul>
        )}
      </div>
      <button className="ml-4" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '☀️' : '🌙'}
      </button>
    </nav>
  );
}

export default Navbar;