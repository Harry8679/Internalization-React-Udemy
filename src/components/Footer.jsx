// Footer.jsx
import { useTranslation } from 'react-i18next';
function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="text-center p-4 bg-gray-200 dark:bg-gray-800">
      {t('footer')}
    </footer>
  );
}

export default Footer;