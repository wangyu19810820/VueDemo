// slot位置会替换为宿主元素内内容
Vue.component('navigation-link', {
    template: `
        <a v-bind:href="url" class="nav-link">
            <slot></slot>
        </a>
    `,
    props: ['url'],
})

// slot位置不单能替换为文本，还能替换成html和组件
Vue.component('red-font', {
    template: `<span style="color:red">{{ value }}</span>`,
    props: ['value'],
})

// 命名slot
Vue.component('base-layout', {
    template: `
        <div class="container">
            <header>
                <slot name="header"></slot>
            </header>
            <main>
                <slot></slot>
            </main>
            <footer>
                <slot name="footer">
                    <p>footer</p>
                </slot>
            </footer>
        </div>
    `,
})

// 插槽替换内容，只能访问宿主元素作用域内属性，不能访问组件作用域内属性
Vue.component('scope-1', {
    template: `
        <div>
            <p>{{ label1 }}</p>
            <slot></slot>
        </div>
    `,
    computed: {
        label1() {
            return "label1";
        }
    }
})

// 组件可以通过v-bind向slot内容传递数据
// slot内通过slot-scope获取传递内容组合后的对象
Vue.component('msg-list', {
    template: `
        <ul>
            <li v-for="msg in msglist">
                <slot v-bind:m="msg"></slot>
            </li>
        </ul>
    `,
    props: ['msglist'],
})

let vm1 = new Vue({
    el: '#vm1',
    data: {
        hrefs: {
            label: 'baidu',
            href: 'http://www.baidu.com/',
        },
        list: ['aa', 'bb'],
    },
    computed: {
        label2() {
            return "label2";
        }
    }
})