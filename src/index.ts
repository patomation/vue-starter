import Vue from 'vue'
import VueRouter from 'vue-router'
import './style/main.sass'

import App from './App.vue'

import Home from './routes/Home.vue'
import About from './routes/About.vue'
import Contact from './routes/Contact.vue'

if (module && module.hot) {
  module.hot.accept()
}

export const getString = (): string => {
  return 'a string'
}

Vue.use(VueRouter)

const routes = [
  { name: 'home', path: '/', component: Home },
  { name: 'about', path: '/about', component: About },
  { name: 'contact', path: '/contact', component: Contact }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
