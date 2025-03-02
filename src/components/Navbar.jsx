import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const languageOptions = [
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' }
];

function Navbar() {
  const { t, i18n } = useTranslation();
  const { darkMode, setDarkMode } = useTheme();
  const [showDropdown, setShowDropdown] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
    setShowDropdown(false);
  };

  return (
    <nav className="p-4 bg-gray-300 dark:bg-gray-900 text-black dark:text-white flex justify-between items-center">
      <div>
        <Link to="/" className="mr-4">{t('home')}</Link>
        <Link to="/about" className="mr-4">{t('about')}</Link>
        <Link to="/contact" className="mr-4">{t('contact')}</Link>
      </div>
      <div className="relative">
        <button
          className="px-4 py-2 bg-gray-500 dark:bg-gray-700 rounded text-white"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          🌍 {t('language')}
        </button>
        {showDropdown && (
          <ul className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 shadow-md rounded-md overflow-hidden">
            {languageOptions.map(({ code, label, flag }) => (
              <li key={code} className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer" onClick={() => changeLanguage(code)}>
                {flag} {label}
              </li>
            ))}
          </ul>
        )}
      </div>
      <button className="ml-4" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700 dark:text-white" />}
      </button>
    </nav>
  );
}

export default Navbar;