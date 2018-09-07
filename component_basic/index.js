Vue.component('button-counter', {
    template: '<button @click="addCount">{{count}}</button>',
    data: function() {
        return {
            count: 0,
        }
    },
    methods: {
        addCount() {
            this.count++;
        }
    }
});

// 组件嵌套组件，组件使用v-model双向绑定数据
Vue.component('blog-title', {
    template: `<input v-model="value" v-on:input="$emit('input', $event.target.value)" />`,
    props: ['value'],
});
Vue.component('blog-post', {
    template: `
        <div>
            {{ title }}
            <blog-title v-model="title" v-on:input="title = $event"></blog-title>
            <button @click="$emit('enlarge', 0.1)">+</button>
            <button @click="$emit('small', 0.1)">-</button>
            <div v-html="content"></div>
        </div>
    `,
    props: ['title', 'content'],
});

let vm1 = new Vue({
    el: '#vm1',
    data: {
        postFontSize: 2,
        postArr: [
            {id: 1, title: 'title1', content: '<div style="color:red">content1</div>'},
            {id: 2, title: 'title2', content: '<div style="color:blue">content2</div>'},
            {id: 3, title: 'title3', content: '<div style="color:yellow">content3</div>'},
        ],
    },
    methods: {
        smallPostSize(v) {
            this.postFontSize -= v;
        }
    },
    computed: {
        postArrJson() {
            return JSON.stringify(this.postArr);
        }
    },
});

// 插槽，<slot></slot>的内容会被组件标签内的内容替换
Vue.component('alert-box', {
    template: 
    `
        <div style="background-color:red">
            <strong>Error!</strong>
            <slot></slot>
        </div>
    `,
});

let vm2 = new Vue({
    el: '#vm2',
});

// 动态组件，核心代码是页面上的<component v-bind:is="curComponent"></component>
Vue.component('component-1', {
    template: 
    `
        <div>component-1</div>
    `,
});

Vue.component('component-2', {
    template: 
    `
        <div>component-2</div>
    `,
});

Vue.component('component-3', {
    template: 
    `
        <div>component-3</div>
    `,
});

let vm3 = new Vue({
    el: '#vm3',
    data: {
        componetArr: ['component-1', 'component-2', 'component-3'],
        curComponent: '',
    },
});

// 用普通html标签，结合is来使用组件
// 因为html格式限制，某些dom结构下只能使用特定类型的标签，可以用此技术规避风险
// 但是以下情况无此问题：字符串 (例如：template: '...')，单文件组件 (.vue)，<script type="text/x-template">
Vue.component('some-row', {
    template:"<tr><td>aa</td><td>bb</td></tr>",
})

let vm4 = new Vue({
    el: '#vm4',
})
