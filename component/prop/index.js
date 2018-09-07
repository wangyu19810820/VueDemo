// 在html中，不区分大小写，所以组件标签和绑定属性名都要由驼峰式转换成kebab（全小写，驼峰转减号）
Vue.component('my-component1', {
    template: '<div>{{postTitle}}</div>',
    props: ['postTitle'],
});

Vue.component('my-component2', {
    template: '<my-component1 v-bind:postTitle="title"></my-component1>',
    data: function() {
        return {
            title: '如果你使用字符串模板，那么这个限制就不存在了',
        }
    }
});

// 定义props属性的时候，可以指定类型
Vue.component('my-component3', {
    template: `
        <div>
            <p>{{id}}:{{title}}</p>
            <p>{{isPosted ? '已发表' : '未发表'}}</p>
            <p>author:{{author.firstName}} {{author.lastName}}</p>
            <p><span v-for="c in comments">{{c}}, </span></p>
        </div>
    `,
    props: {
        id: {
            type: Number,
            default: 1,   
        },
        title: {
            type: String,
            required: true,
        },
        isPosted: Boolean,
        comments: Array,
        author: Object,
    }
})

// 每次父级组件发生更新时，子组件中所有的 prop 都将会刷新为最新的值
// 避免互相影响，采用新建一个内部变量赋初值的方式解决
// 对于prop属性，要转换后使用的话，可以考虑通过计算属性实现
// 改变绑定对象的值，会影响原始数值，改变单向数据流动的设计原则
Vue.component('my-component4', {
    template: `
        <div>
            <p>{{counter}}<button v-on:click="counter++">+</button></p>
            <p>{{ innerName }}</p>
            <p><button @click="changeName">改变绑定对象的值，会影响原始数值</button></p>
        </div>
    `,
    props: ['count', 'author'],
    data: function() {
        return {
            counter: this.count
        }
    },
    computed: {
        innerName: {
            get: function () {
                return this.author.firstName.trim().toUpperCase()
            },
        }
    },
    methods: {
        changeName: function() {
            this.author.firstName += 'aa'
        }
    }
});

// 默认组件会在根元素上合并html的attribute，css的class和style
// inheritAttrs: false后，css的class和style还会合并，但是html的attribute不合并了
Vue.component('my-component5', {
    inheritAttrs: false,
    template: '<div data-id=2 class="classA" style="color:red">{{$attrs["data-title"]}}</div>',
    props: ['title'],
});

let vm1 = new Vue({
    el: '#vm1',
    data: {
        postTitleValue: 'Prop 的大小写 (camelCase vs kebab-case)',
        author: {
            firstName: 'jim',
            lastName: 'green',
        },
        id: 11,
        comments: ['good', 'not bad'],
        isPosted: true,
        post: {
            id: 11, 
            title: '传入一个对象', 
            author: {
                firstName: 'jim',
                lastName: 'green',
            }, 
            comments: ['good', 'not bad'], 
            isPosted: false,
        },
        count: 10,
        name: 'aBc',
    },
    methods: {
        add() {
            this.count++;
            this.name += 'a';
        }
    }
})