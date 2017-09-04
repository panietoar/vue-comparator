import Vue from 'vue'
import Hello from '@/components/Hello'

describe('Comparator.vue', () => {
    it('should render correct contents', () => {
        const Constructor = Vue.extend(Comparator)
        const vm = new Constructor().$mount()
        expect(vm.$el.querySelector('.label-title').textContent)
            .to.equal('')
    })
})