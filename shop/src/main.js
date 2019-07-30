
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import * as VueGoogleMaps from 'vue2-google-maps';


import Index from './components/Index.vue'
import Items from './components/Items.vue'
import Headquarters from './components/Headquarters.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Buefy)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDXdE6gaBfYxU96TyXZ2de8ESqpahBj1sE',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
 
    //// If you want to set the version, you can do so:
    // v: '3.26',
  }
})

const routes = [
  { path: '/', component: Index },
  { path: '/items', component: Items },
  { path: '/headquarters', component: Headquarters }
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
