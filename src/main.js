import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import './style.css'
import App from './App.vue'
import Home from './view/Home.vue'
import Life from './view/Life.vue'
import Ant from './view/Ant.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/ant', component: Ant },
  { path: '/life', component: Life },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
