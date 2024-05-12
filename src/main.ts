import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/base.css'

// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Vue Router
import router from './router'

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'dark'
    },
    icons: {
      defaultSet: 'mdi',
    }
  });

const app = createApp(App).use(vuetify).use(router)

app.mount('#app')
