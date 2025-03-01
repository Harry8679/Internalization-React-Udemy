// Home.jsx
import { useTranslation } from 'react-i18next';
function Home() {
  const { t } = useTranslation();
  return <h1 className="text-3xl text-center">{t('home')}</h1>;
}

export default Home;