// 在html中，不区分大小写，所以组件标签和绑定属性名都要由驼峰式转换成kebab（全小写，驼峰转减号）
// 组件名，绑定属性在js中可以写成驼峰形式，但是触发事件必须写成kebab形式
Vue.component('my-component1', {
    template: `
        <div>
            aaaaaaaaaaa
            <button v-on:click="$emit('myEvent', 'ok')">触发事件</button>
            <button v-on:click="$emit('my-event', 'ok')">触发事件</button>
        </div>
    `,
});

// v-model模拟双向数据绑定，这个是最普通的，其中input事件是html5新增事件
Vue.component('my-component2', {
    template: `
        <div>
            <input type="text" v-bind:value="value" v-on:input="$emit('input', $event.target.value)" />
        </div>
    `,
    props: ['value'],
});

// v-model模拟双向数据绑定，自定义双向绑定的属性名，和回调事件名
Vue.component('my-component3', {
    template: `
        <div>
            <input type="text" v-bind:value="modelvalue" v-on:input="$emit('back', $event.target.value)" />
        </div>
    `,
    props: ['modelvalue'],
    model: {
        prop: 'modelvalue',
        event: 'back',
    }
});

// 组件的宿主元素用.native修饰符，也可以直接触发事件
Vue.component('my-component4', {
    template: `
        <input type="text">
    `,
});

// 组件的宿主元素有html属性，和事件需要加载到组件某个特定元素上 
// v-bind="$attrs"绑定属性，v-on="inputListeners"绑定事件，
// $attrs获取宿主属性，this.$listeners获取宿主非.native修饰事件
Vue.component('my-component5', {
    template: `
        <label>
            <input v-bind="$attrs" v-bind:value="value" v-on="inputListeners">
        </label>                             
    `,
    inheritAttrs: false,
    props: ['value'],
    computed: {
        inputListeners() {
            return Object.assign(
                {}, 
                this.$listeners, 
                {
                    input: () => {
                        this.$emit('input', event.target.value)
                    }
                }
            )
        }
    },
});

// .sync简化双向绑定，页面v-bind:title.sync="title"，组件内触发事件的事件名update:title，其中title是组件的绑定属性名
Vue.component('my-component6', {
    template: `
        <label>
            <input v-bind:value="title" v-on:input="$emit('update:title', $event.target.value)">
        </label>                             
    `,
    props: ['title'],
});

let vm1 = new Vue({
    el: '#vm1',
    data: {
        title: 'aaa',
    },
    methods: {

    },
})

