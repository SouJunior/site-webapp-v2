import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import pt from './locales/pt.json';
import en from './locales/en.json';
import es from './locales/es.json';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';

// Cria objeto de recursos completo com fallbacks
interface LocaleType {
  header?: Record<string, unknown>;
}

const createResources = (locale: LocaleType) => ({
  header: locale.header || {},
});

i18n
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .init({
    fallbackLng: 'pt',
    lng: localStorage.getItem('i18nextLng') || 'pt', // Usa idioma do localStorage ou português como padrão
    ns: ['header'],
    defaultNS: 'header',
    resources: {
      en: createResources(en),
      pt: createResources(pt),
      es: createResources(es),
    },
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;

export {};
