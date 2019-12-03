import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import VueRouter from 'vue-router'
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import * as VueGoogleMaps from 'vue2-google-maps';
import VueImg from 'v-img'


import Index from './components/Index.vue'
import Items from './components/Items.vue'
import ItemPage from './components/ItemPage.vue'
import Headquarters from './components/Headquarters.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Buefy)
Vue.use(VueGoogleMaps, {
    load: {
        key: '',
        libraries: 'places', // This is required if you use the Autocomplete plugin
        // OR: libraries: 'places,drawing'
        // OR: libraries: 'places,drawing,visualization'
        // (as you require)

        //// If you want to set the version, you can do so:
        // v: '3.26',
    }
})
Vue.use(VueImg)

const store = new Vuex.Store({
    state: {
        user: ""
    }
})

const routes = [
    { name: 'Index', path: '/', component: Index },
    { name: 'Items', path: '/items', component: Items },
    { name: 'Headquarters', path: '/headquarters', component: Headquarters },
    { name: 'ItemPage', path: '/item/:itemId', component: ItemPage }
]

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes
})

new Vue({
    el: '#app',
    components: { App },
    router,
    store,
    render: h => h(App),
}).$mount('#app')