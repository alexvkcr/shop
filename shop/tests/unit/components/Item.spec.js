import { shallowMount } from '@vue/test-utils'
import Item from '@/components/Item.vue'

describe('Item.vue', () => {
    it('has the proper id', () => {
        const id = 'Item'
        const wrapper = shallowMount(Item, {
            name: 'Item'
        })
        expect(wrapper.attributes().id).toContain(id)
    })
})