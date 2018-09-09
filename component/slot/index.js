// slot位置会替换为宿主元素内内容
Vue.component('navigation-link', {
    template: `
        <a v-bind:href="url" class="nav-link">
            <slot></slot>
        </a>
    `,
    props: ['url'],
})

Vue.component('red-font', {
    template: `<span style="color:red">{{ value }}</span>`,
    props: ['value'],
})

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