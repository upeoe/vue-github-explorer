// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'

Vue.use(VueResource)

/* eslint-disable no-new */
const vm = new Vue({
  render: h => h(App),
}).$mount('#app')
