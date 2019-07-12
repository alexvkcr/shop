
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'


import Index from './components/Index.vue'
import Items from './components/Items.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Index },
  { path: '/items', component: Items }
]

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes // short for `routes: routes`
})

new Vue({
  el: '#app', 
  components: { App },
  router,
  render: h => h(App),
}).$mount('#app')
