import { shallowMount } from '@vue/test-utils'
import VueRouter from 'vue-router'
import SideBar from '@/components/SideBar.vue'


describe('SideBar.vue', () => {
  it('has the proper id', () => {
    const id = 'SideBar'
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
    const wrapper = shallowMount(SideBar, {
      stubs: ['router-link', 'router-view'],
      name: 'SideBar',
      router
    })
    expect(wrapper.attributes().id).toContain(id)
  })
})
