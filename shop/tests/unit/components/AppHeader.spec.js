import { shallowMount } from '@vue/test-utils'
import AppHeader from '@/components/AppHeader.vue'

describe('AppHeader.vue', () => {
  it('has the proper id', () => {
    const id = 'AppHeader'
    const wrapper = shallowMount(AppHeader, {
      name: 'AppHeader'
    })
    expect(wrapper.attributes().id).toContain(id)
  })
})
