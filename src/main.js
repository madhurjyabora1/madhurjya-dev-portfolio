import { createApp } from 'vue'
import './styles/portfolio-v2.css'
// Registers the <image-slot> custom element (side-effect import).
import './webcomponents/image-slot.js'
import App from './App.vue'

createApp(App).mount('#app')
