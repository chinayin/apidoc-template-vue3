import {createI18n} from 'vue-i18n';
import messages from '../locales';

const language = (navigator.language || navigator.userLanguage).toLowerCase().replace('-', '_')
const locale = language.substr(0, 2)
const i18n = createI18n({
  legacy: false, // you must specify 'legacy: false' option
  fallbackLocale: 'en',
  locale,
  messages,
})

export default i18n
