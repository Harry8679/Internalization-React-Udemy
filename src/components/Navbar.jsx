// Navbar.jsx
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';

function Navbar() {
  const { t, i18n } = useTranslation();
  const { darkMode, setDarkMode } = useTheme();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <nav className="p-4 bg-gray-200 dark:bg-gray-800 text-center flex justify-between">
      <div>
        <Link to="/" className="mr-4">{t('home')}</Link>
        <Link to="/about" className="mr-4">{t('about')}</Link>
        <Link to="/contact" className="mr-4">{t('contact')}</Link>
      </div>
      <div>
        <button onClick={() => changeLanguage('fr')} className="mr-2">FR</button>
        <button onClick={() => changeLanguage('en')} className="mr-2">EN</button>
        <button onClick={() => changeLanguage('es')} className="mr-2">ES</button>
        <button onClick={() => changeLanguage('de')} className="mr-2">DE</button>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;