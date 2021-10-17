import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

import en from './common/en.json';
import de from './common/de.json';

const LANGUAGES = {
    en,
    de
};

const LANG_CODES = Object.keys(LANGUAGES);

const LANGUAGE_DETECTOR: any = {
    type: 'languageDetector',
    async: true,
    detect: async (callback: (arg0: string) => void) => {
        const findBestAvailableLanguage = RNLocalize.findBestAvailableLanguage(LANG_CODES);
        callback(findBestAvailableLanguage?.languageTag || 'en');
    },
    init: () => { },
    cacheUserLanguage: () => {
    }
};

i18n
    .use(LANGUAGE_DETECTOR)
    .use(initReactI18next)
    .init({
        compatibilityJSON: 'v3',
        fallbackLng: 'en',
        resources: LANGUAGES,
        react: {
            useSuspense: false
        },
        interpolation: {
            escapeValue: false
        }
    });

export default i18n