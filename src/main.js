import {createApp} from 'vue'
import App from './App.vue'
import I18nPlugin from './plugins/i18n'
import RouterPlugin from './router'

import '/@/assets/css/bootstrap.min.css'
import '/@/assets/css/style.less'
import 'prismjs/themes/prism-coy.css'

createApp(App)
  .use(I18nPlugin)
  .use(RouterPlugin)
  .mount('#app')
