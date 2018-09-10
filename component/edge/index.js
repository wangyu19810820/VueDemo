// $root访问根实例
Vue.component('my-component1', {
    template: `
        <div>{{ $root.title }}<button @click="changeTitle">改变title</button></div>
    `,
    methods: {
        changeTitle() {
            this.$root.title = '访问根实例';
        }
    },
})

// $parent访问父组件
Vue.component('my-component2', {
    template: `
        <div>
            {{ $parent.middleTitle }}, {{ innerTitle }}
            <input ref="input1">
        </div>
    `,
    data: function() {
        return {
            innerTitle: 'innerTitle',
        }
    },
    methods: {
        focus() {
            this.$refs.input1.focus();
        }
    }
})

// ref注册子组件，$refs引用子组件，好像不能直接跨多级引用
Vue.component('my-component3', {
    template: `
        <div>
            <my-component2 ref="component2"></my-component2>
            <button @click="changeInnerTitle"s>changeInnerTitle</button>
        </div>
    `,
    data: function() {
        return {
            middleTitle: 'middleTitle',
        }
    },
    methods: {
        changeInnerTitle() {
            this.$refs.component2.innerTitle = 'aa';
            this.$refs.component2.focus();
            // this.$refs.input1.focus();   // 报错
        }
    }
})

// provide 选项允许我们指定我们想要提供给后代组件的数据/方法
// inject 选项来接收
// 但是由provide/inject接收的数据，是非响应式的，需要小心使用
Vue.component('my-component4', {
    template: `
        <div>
            {{ middleTitle }}
            <button @click="changeMiddleTitle1">changeMiddleTitle1</button>
            <button @click="changeMiddleTitle2">changeMiddleTitle2</button>
        </div>
    `,
    inject: ['middleTitle', 'changeTitle'],
    methods: {
        changeMiddleTitle1() {
            this.middleTitle = 'bb';
        },
        changeMiddleTitle2() {
            this.changeTitle();
        },
    },
})

Vue.component('my-component5', {
    template: `
        <div>
            <my-component4></my-component4>
        </div>
    `,
})

Vue.component('my-component6', {
    template: `
        <div>
            <my-component5></my-component5>
            <div>
                {{ middleTitle }}<button @click="changeTitle">changeTitle</button>
            </div>
        </div>
    `,
    data: function() {
        return {
            middleTitle: 'middleTitle',
        }
    },
    methods: {
        changeTitle() {
            this.middleTitle = 'cc';
        }
    },
    provide: function() {
        return {
            middleTitle: this.middleTitle,
            changeTitle: this.changeTitle,
        }
    },
})

// $on侦听一个事件，$once一次性侦听一个事件，$off停止侦听一个事件
Vue.component('my-component7', {
    template: `<div>my-component7</div>`,
    mounted: function () {
        this.$once('hook:beforeDestroy', function () {
            console.log('my-component7 beforeDestroy')
        })
    },
});

Vue.component('my-component8', {
    template: `<div>my-component8</div>`,
    mounted: function () {
        this.$once('hook:beforeDestroy', function () {
            console.log('my-component8 beforeDestroy')
        })
    },    
});

// 递归组件
Vue.component('my-component9', {
    template: `
        <div>
            my-component9
            <my-component9 v-if="Math.random() > 0.5"></my-component9>
        </div>
    `,
});

// 互相引用，在全局注册中不存在此问题
Vue.component('tree-folder', {
    template: `
        <p>
            <span style="color:red">{{ folder.name }}</span>
            <tree-folder-contents :children="folder.children"/>
        </p>
    `,
    props: ['folder'],
})

Vue.component('tree-folder-contents', {
    template: `
        <ul>
            <li v-for="child in children">
                <tree-folder v-if="child.children" :folder="child"/>
                <span v-else>{{ child.name }}</span>
            </li>
        </ul>
    `,
    props: ['children'],
})

Vue.component('my-component11', {
    template: '#my-component11-template'
})

Vue.component('my-component12', {
    template: `
        <div v-once>
            v-once:{{ $root.title }}
        </div>
    `,
    props: ['title1'],
})

let vm1 = new Vue({
    el: '#vm1',
    data: {
        title: '处理边界情况',
        curComponent: '',
        tree: {
            name: 'root',
            children: [
                {
                    name: 'fold1',
                    children: [
                        {
                            name: 'file11',
                        },
                        {
                            name: 'file22',
                        }
                    ],
                },
                {
                    name: 'file2',
                },
            ],
        }
    },
    components: {
        'my-component10': {

        }
    },
    methods: {
        forceUpdate() {
            // 仅仅影响实例本身和插入插槽内容的子组件
            this.$forceUpdate();
        }
    },
})