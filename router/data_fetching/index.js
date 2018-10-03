const Foo = { 
    template: `
        <div>foo</div>
    `,
    data() {
        return {
            loading: false,
            post: null,
            error: null,
        }
    },
    methods: {
        fetchData
    },

}
const Bar = { template: '<div>bar</div>' }

const routes = [
    {
        path: '/foo',
        component: Foo,
    },
    {
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


