import { shallowMount } from '@vue/test-utils' 
import Headquarters from '@/components/Headquarters.vue'
 

describe('Headquarters.vue', () => {
  it('has the proper id', () => {
    const id = 'Headquarters'
    const wrapper = shallowMount(Headquarters,{
        name: 'Headquarters'
      }
    )
    expect(wrapper.attributes().id).toContain(id)
  })
})
