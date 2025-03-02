import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';
import { useEffect } from 'react';

function Home() {
  const { t } = useTranslation();
  const { darkMode, toggleTheme } = useTheme();

  useEffect(() => {
    document.title = t('home');
  }, [t]);

  return (
    <div className="text-center p-10">
      <h1 className="text-5xl font-bold mb-6">{t('home')}</h1>
      
      <p className="text-lg mb-8">{t('welcomeMessage')}</p>
      
      <button 
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        onClick={toggleTheme}
      >
        {darkMode ? t('disableDarkMode') : t('enableDarkMode')}
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        <div className="p-6 shadow-lg rounded-lg bg-gray-100 dark:bg-gray-800">
          <h2 className="text-2xl font-semibold mb-3">{t('about')}</h2>
          <p>{t('aboutDescription')}</p>
        </div>

        <div className="p-6 shadow-lg rounded-lg bg-gray-100 dark:bg-gray-800">
          <h2 className="text-2xl font-semibold mb-3">{t('contact')}</h2>
          <p>{t('contactDescription')}</p>
        </div>

        <div className="p-6 shadow-lg rounded-lg bg-gray-100 dark:bg-gray-800">
          <h2 className="text-2xl font-semibold mb-3">{t('footer')}</h2>
          <p>{t('footerMessage')}</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
