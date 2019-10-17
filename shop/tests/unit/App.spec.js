import { shallowMount, createLocalVue } from '@vue/test-utils'
import App from '@/App.vue'
import AppHeader from '../../src/components/AppHeader.vue'
import SideBar from '../../src/components/SideBar.vue'
import AppFooter from '../../src/components/AppFooter.vue'


const localVue = createLocalVue()
localVue.use(AppHeader)
localVue.use(SideBar)
localVue.use(AppFooter)



describe('App.vue', () => {
  it('has the proper id', () => {
    const id = 'app'
    const wrapper = shallowMount(App, localVue)
    expect(wrapper.attributes().id).toContain(id)
  })
})
