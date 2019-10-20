import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import SideBar from '@/components/SideBar.vue'
import Buefy from 'buefy'


const routes = [
  { path: '/' },
  { path: '/items' },
  { path: '/headquarters' }
]
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes
})
const localVue = createLocalVue()
localVue.use(router)
localVue.use(Buefy)


describe('SideBar.vue', () => {
  it('has the proper id', () => {
    const id = 'SideBar'
    const wrapper = shallowMount(SideBar,{localVue, 
      name: 'SideBar'
    })
    expect(wrapper.attributes().id).toContain(id)
  })
})
