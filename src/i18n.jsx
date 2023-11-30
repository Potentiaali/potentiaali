import i18n from 'i18next'
// import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from 'react-i18next'
import fi from '../public/locales/fi/translation.json'
import en from '../public/locales/en/translation.json'
import fiSubjects from '../public/locales/fi/subjects.json'
import enSubjects from '../public/locales/en/subjects.json'

i18n
  //  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    locales: ['en', 'fi'],
    localeDetection: false,
    defaultLocale: 'fi',
    defaultNS: 'translation',
    pages: {
      '*': ['translation']
    },
    lng: 'fi',
    fallbackLng: 'fi',

    interpolation: {
      escapeValue: false
    },
    resources: {
      fi: {
        translation: fi,
        subjects: fiSubjects
      },
      en: {
        translation: en,
        subjects: enSubjects

      },
    }
  })

export default i18n
