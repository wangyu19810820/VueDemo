Vue.component('my-component1', {
    props: ['value1'],
    inject: ['baz'],
    template: `
        <div @click="baz()">
            aa, {{a}}
        </div>
    `,
    data: function() {
        return {
            a: 'aa',
            b: 'bb',
        }
    },

})

Vue.component('my-component2', {
    template: `
        <div>
            <my-component1 ref="comp11"></my-component1>
            <button @click="fun1">no change</button>
        </div>
    `,
    methods: {
        fun1() {
            console.log(this.$refs.comp11.a)
        }
    },
    mounted:function() {
        this.$once('hook:beforeDestroy', function () {
            console.log('bbb')
        })
    },
})

Vue.component('my-component4', {
    template: '#temp1',
})


let vm1 = new Vue({
    el: '#vm1',
    provide: function() {
        return {
            baz: this.baz
        }
    },
    data: {
        fontSize: 15,
        comp: 'my-comp1',
        currentTabComponent: 'my-component3',
    },
    methods: {
        baz() {
            console.log('aa')
        }
    },
    components: {
        'my-component10':{

        }
    }

})
