import { shallowMount } from '@vue/test-utils'
import Index from '@/components/Index.vue'

describe('Index.vue', () => {
  it('has the proper id', () => {
    const id = 'Index'
    const wrapper = shallowMount(Index, {
      name: 'Index'
    })
    expect(wrapper.attributes().id).toContain(id)
  })
})
