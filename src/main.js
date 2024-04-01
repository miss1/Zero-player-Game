import { createApp } from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './view/Home.vue'
import Life from './view/Life.vue'
import Ant from './view/Ant.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/life', component: Life },
  { path: '/ant', component: Ant },
]

const router = createRouter({
  history: createWebHashHistory('/Zero-player-Game'),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
