import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'gitart-vue-dialog/dist/style.css'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import store from './store'
import { plugin as dialogPlugin } from 'gitart-vue-dialog'

const app = createApp(App)
app.use(router)
app.use(dialogPlugin)
app.use(BootstrapVue3)
app.use(store)
app.mount('#app')
