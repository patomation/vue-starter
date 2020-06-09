
<template>
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
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  },
  methods: {
    upperCase (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
  }
}
</script>