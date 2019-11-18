import { shallowMount, createLocalVue } from '@vue/test-utils'
import Item from '@/components/Item.vue'
import { Icon } from 'buefy'


const localVue = createLocalVue()
localVue.use(Icon)

describe('Item.vue', () => {
    it('has the proper id', () => {
        const id = 'Item'
        const wrapper = shallowMount(Item, {
            name: 'Item',
            localVue,
            props: {
                thing: {
                    id: 1,
                    name: "Algo",
                    description: "Delicioso",
                    allergens: ['Glut'],
                    price: 30,
                    img: 'oo'
                }
            },
        })
        expect(wrapper.attributes().id).toContain(id)
    })
})