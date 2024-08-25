import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      home: 'Home',
      about: 'About',
      contact: 'Contact',
      welcome: 'Welcome to our news portal!',
      change_language: 'Change Language',
      'The Wall Street Journal': 'The Wall Street Journal'
    }
  },
  pt: {
    translation: {
      home: 'Início',
      about: 'Sobre',
      contact: 'Contato',
      welcome: 'Bem-vindo ao nosso portal de notícias!',
      change_language: 'Trocar idioma',
      'The Wall Street Journal': 'O Jornal de Wall Street',
      'Read News': 'Ler Notícia'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
