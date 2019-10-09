import { shallowMount } from '@vue/test-utils'
import Items from '@/components/Items.vue'

describe('Items.vue', () => {
  it('has the proper id', () => {
    const id = 'Items'
    const wrapper = shallowMount(Items, {
      name: 'Items'
    })
    expect(wrapper.attributes().id).toContain(id)
  })
})
