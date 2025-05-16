// src/main.ts
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css' 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Includes Popper.js  
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/styles.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
