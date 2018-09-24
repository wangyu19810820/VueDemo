var mixin = {
    // 数据属性合并后，冲突的部分会被实例对象覆盖
    data() {
        return {
            message: 'hello',
            foo: 'abc',
        }
    },
    // methods, components, directives合并后，冲突的部分会被实例对象覆盖
    methods: {
        method1() {
            console.log('mixin method1');
        },
        method2() {
            console.log('mixin method2');
        }
    },
    // 生命周期的函数会被合并，并且混入对象的生命周期函数率先被调用
    created() {
        console.log('mixin create')
    },
}

Vue.mixin({
    created() {
        console.log('全局mixin,' + this.$options.myOption)
    }
})

let vm1 = new Vue({
    el: '#vm1',
    template: `<div>{{ message }}, {{ foo }}, {{ bar }}</div>`,
    mixins: [mixin],
    myOption: 'myOption',
    data() {
        return {
            message: 'message',
            bar: 'xyz',
        }
    },
    methods: {
        method1() {
            console.log('Vue method1');
        },
        method3() {
            console.log('Vue method3');
        }
    },
    created() {
        console.log('Vue create')
    },
    mounted() {
        this.method1();
        this.method2();
        this.method3();
    },
})