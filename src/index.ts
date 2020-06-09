import Vue from 'vue'
import VueRouter from 'vue-router'
import './style/main.sass'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './routes/Home'
import About from './routes/About'
import Contact from './routes/Contact'

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
  render: h => h({
    components: {
      Header,
      Footer
    },
    methods: {
      upperCase (string: string): string {
        return string.charAt(0).toUpperCase() + string.slice(1)
      }
    },
    template: `
    <div>
      <Header v-bind:title=upperCase($route.name) />
      <nav>
        <router-link to="/" exact>Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
      <router-view/>
      <Footer/>
    </div>
    `
  })
}).$mount('#app')
