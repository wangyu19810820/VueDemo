const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
    {
        path: '/a',
        redirect: '/foo',
    },
    {
        path: '/b',
        redirect: {name: 'bar'},
    },
    {
        path: '/c',
        redirect: (to) => {
            // console.log(to)
            // return {name: 'foo'}
            return 'foo'
        },
    },
    {
        path: '/d',
        component: Bar,
        alias: '/e',
    },
    {
        name: 'foo',
        path: '/foo',
        component: Foo,
    },
    {
        name: 'bar',
        path: '/bar',
        component: Bar,
    }
]

const router = new VueRouter({
    routes
})

const app = new Vue({
    router
}).$mount('#app')


