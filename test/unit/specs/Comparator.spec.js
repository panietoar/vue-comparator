import Vue from 'vue'
import Comparator from '@/components/Comparator'

describe('Comparator.vue', () => {
    it('should render correct contents', () => {
        const Constructor = Vue.extend(Comparator)
        const vm = new Constructor().$mount()
        expect(vm.$el.querySelector('.label-title').textContent)
            .to.equal('')
    })
})