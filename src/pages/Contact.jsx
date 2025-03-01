// Contact.jsx
import { useTranslation } from 'react-i18next';
function Contact() {
  const { t } = useTranslation();
  return <h1 className="text-3xl text-center">{t('contact')}</h1>;
}

export default Contact;