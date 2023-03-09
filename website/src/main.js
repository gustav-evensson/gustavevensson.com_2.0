import { createApp } from 'vue'
import { createPinia } from 'pinia';
import './style/css/reset.css'
import './style/css/app.css'
import App from './App.vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate);

createApp(App).use(pinia).mount('#app')
