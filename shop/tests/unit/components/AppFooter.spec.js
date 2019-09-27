import { shallowMount } from '@vue/test-utils'
import AppFooter from '@/components/AppFooter.vue'

describe('AppFooter.vue', () => {
  it('has the proper id', () => {
    const id = 'AppFooter'
    const wrapper = shallowMount(AppFooter, {
      name: 'AppFooter'
    })
    expect(wrapper.attributes().id).toContain(id)
  })
})
