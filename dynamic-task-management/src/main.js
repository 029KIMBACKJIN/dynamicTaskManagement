import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
// import BootstrapVue3 from 'bootstrap-vue-3'

const app = createApp(App)
// app.use(BootstrapVue3)
app.use(router)
app.mount('#app')