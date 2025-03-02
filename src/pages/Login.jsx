// Login.jsx
import { useTranslation } from 'react-i18next';

function Login() {
  const { t } = useTranslation();
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">{t('login')}</h2>
      <form>
        <label className="block mb-2">{t('email')}</label>
        <input type="email" className="w-full p-2 mb-4 border rounded" placeholder={t('email')} />
        <label className="block mb-2">{t('password')}</label>
        <input type="password" className="w-full p-2 mb-4 border rounded" placeholder={t('password')} />
        <button className="w-full bg-blue-500 text-white p-2 rounded">{t('login')}</button>
      </form>
    </div>
  );
}

export default Login;
