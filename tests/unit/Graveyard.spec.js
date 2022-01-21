import {shallowMount} from '@vue/test-utils'
import Graveyard from '@/components/game/graveyard/Graveyard'
import Piece from "@/components/game/pieces/Piece";

test('Renders a Graveyard and counts Graveyard Pieces correctly', () => {
    const wrapper = shallowMount(Graveyard, {
        components: {Piece},
        propsData: {
            graveyard: [ "♕", "♙" ]
        }
    })

    // Check if Graveyard is displayed at all
    const div = wrapper.find('div')
    expect(div.exists()).toBe(true)

    // Check if Counting Graveyard Pieces is working as expected
    wrapper.vm.populateCountsArray();
    expect(wrapper.vm.counts["♕"]).toBe(1)
    expect(wrapper.vm.counts["♙"]).toBe(1)

})