import path from 'path'
import {defineConfig, UserConfigExport, ConfigEnv} from "vite";
import vue from '@vitejs/plugin-vue'
import vueI18n from '@intlify/vite-plugin-vue-i18n'

// https://vitejs.dev/config/
export default ({command}) => {
  return {
    resolve: {
      alias: {
        '/@': path.resolve(__dirname, './src'),
        '/~': path.resolve(__dirname, './src/views'),
        //解决开发环境下的警告 You are running the esm-bundler build of vue-i18n. It is recommended to configure your bundler to explicitly replace feature flag globals with boolean literals to get proper tree-shaking in the final bundle.
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
      }
    },
    plugins: [
      vue(),
      vueI18n({
        include: path.resolve(__dirname, './src/locales/**')
      }),
    ],
    proxy: {
      '/proxy': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/proxy/, '')
      }
    }
  }
}
