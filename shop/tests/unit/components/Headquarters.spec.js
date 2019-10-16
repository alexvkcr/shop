import { shallowMount, createLocalVue } from '@vue/test-utils' 
import Headquarters from '@/components/Headquarters.vue'
import * as VueGoogleMaps from 'vue2-google-maps';


const localVue = createLocalVue()
localVue.use(VueGoogleMaps)

describe('Headquarters.vue', () => {
  it('has the proper id', () => {
    const id = 'Headquarters'
    const wrapper = shallowMount(Headquarters,{
        name: 'Headquarters',
        localVue
      }
    )
    expect(wrapper.attributes().id).toContain(id)
  })
})
