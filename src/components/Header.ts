import Vue from 'vue'

export default Vue.component('Header', {
  props: [
    'title'
  ],
  template: '<header><h1>{{ title }}</h1></header>'
})
