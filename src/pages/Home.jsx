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
    <div className="text-center p-10 text-black dark:text-white bg-white dark:bg-gray-900 rounded-2xl shadow-lg mx-auto max-w-6xl">
      <h1 className="text-5xl font-bold mb-6 text-black dark:text-white">{t('home')}</h1>
      
      <p className="text-lg mb-8 text-black dark:text-white">{t('welcomeMessage')}</p>
      
      <button 
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        onClick={toggleTheme}
      >
        {darkMode ? t('disableDarkMode') : t('enableDarkMode')}
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        <div className="p-6 shadow-lg rounded-lg bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
          <h2 className="text-2xl font-semibold mb-3 text-black dark:text-white">{t('about')}</h2>
          <p className="text-black dark:text-white">{t('aboutDescription')}</p>
        </div>

        <div className="p-6 shadow-lg rounded-lg bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
          <h2 className="text-2xl font-semibold mb-3 text-black dark:text-white">{t('contact')}</h2>
          <p className="text-black dark:text-white">{t('contactDescription')}</p>
        </div>

        <div className="p-6 shadow-lg rounded-lg bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
          <h2 className="text-2xl font-semibold mb-3 text-black dark:text-white">{t('footer')}</h2>
          <p className="text-black dark:text-white">{t('footerMessage')}</p>
        </div>
      </div>
    </div>
  );
}

export default Home;