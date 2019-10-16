import { shallowMount, createLocalVue } from '@vue/test-utils'
import AppFooter from '@/components/AppFooter.vue'
import { Icon } from 'buefy'

const localVue = createLocalVue()
localVue.use(Icon)

describe('AppFooter.vue', () => {
  it('has the proper id', () => {
    const id = 'AppFooter'
    const wrapper = shallowMount(AppFooter, {
      name: 'AppFooter',
      localVue
    })
    expect(wrapper.attributes().id).toContain(id)
  })
})
