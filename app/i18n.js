import 'intl-pluralrules';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';

const resources = {
  en: {
    translation: {
      title: 'Roman Numeral Converter',
      inputLabel: 'Enter the number for conversion:',
      placeholder: 'Ex: MMXX or 10',
      errorMessage: 'You must enter either a Roman numeral or a decimal number for conversion.',
      conversionError: 'The converted number exceeds the limit of 100 characters.',
      unexpectedError: 'An unexpected error occurred. Please try again.',
    },
  },
  pt: {
    translation: {
      title: 'Conversor de números romanos',
      inputLabel: 'Digite o número para conversão:',
      placeholder: 'Ex: MMXX ou 10',
      errorMessage:
        'Você deve digitar um número romano ou número decimal, para a conversão do mesmo.',
      conversionError: 'O número convertido excede o limite de 100 caracteres.',
      unexpectedError: 'Ocorreu um erro inesperado. Tente novamente.',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: Localization.locale.split('-')[0],
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
