import { shallowMount, createLocalVue} from '@vue/test-utils'
import AppHeader from '@/components/AppHeader.vue'
import { Icon } from 'buefy'


const localVue = createLocalVue()
localVue.use(Icon)

describe('AppHeader.vue', () => {
  it('has the proper id', () => {
    const id = 'AppHeader'
    const wrapper = shallowMount(AppHeader, {
      name: 'AppHeader',
      localVue
    })
    expect(wrapper.attributes().id).toContain(id)
  })
})
