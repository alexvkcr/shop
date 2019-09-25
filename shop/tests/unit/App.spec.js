import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('has the proper id', () => {
    const id = 'app'
    const wrapper = shallowMount(App)
    expect(wrapper.attributes().id).toContain(id)
  })
})
