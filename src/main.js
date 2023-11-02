import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { vMaska } from 'maska'

const app = createApp(App)

app.use(createPinia())
app.directive('maska', vMaska)
app.mount('#app')
