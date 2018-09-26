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
    // 验证合并策略
    myOption1: 'myOption1_1',
    myOption2: 'myOption2_1',
    myOption3: {a: 'a', b: 'a', c: 'a'},
}

// 全局mixin
Vue.mixin({
    myOption1: 'myOption1_2',
    myOption2: 'myOption2_2',
    myOption3: {a: 'x', b: 'y', c: 'z'},
    created() {
        console.log('全局mixin,' + this.$options.myOption1);
        console.log(this.$options.myOption2)
        console.log(this.$options.myOption3)
    }
})

// 合并策略，全局mixin在继承覆盖链中，处于最顶层，mixin处于中间，实例本身属性处于最低层
Vue.config.optionMergeStrategies.myOption1 = function(parentVal, childVal) {
    console.log(`parentVal:${parentVal}, childVal:${childVal}`);
    return childVal === undefined ? parentVal : childVal;
}

// 应用常量来设置合并策略
var strategies = Vue.config.optionMergeStrategies;
strategies.myOption2 = strategies.methods;

Vue.config.optionMergeStrategies.myOption3 = function(parentVal, childVal) {
    if (parentVal === undefined) {
        return childVal;
    }
    if (childVal === undefined) {
        return parentVal;
    }
    return {
        a: parentVal.a + childVal.a, 
        b: parentVal.b + childVal.b,
        c: parentVal.c + childVal.c,
    };
}

let vm1 = new Vue({
    el: '#vm1',
    template: `<div>{{ message }}, {{ foo }}, {{ bar }}</div>`,
    mixins: [mixin],
    myOption1: 'myOption1_3',
    myOption2: 'myOption2_3',
    myOption3: {a: '1', b: '2', c: '3'},
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