const Foo = { 
    template: '<div>foo:{{id}},{{id1}}</div>',
    props: ['id', 'id1'],
}


const routes = [
    {
        path: '/foo/:id',
        component: Foo,
        props: true,
    },
    {
        path: '/foo1/:id/:id1',
        component: Foo,
        props: {id: "aa", id1: 2},
    },
    {
        path: '/foo2/:id',
        component: Foo,
        props: (route) => {
            return {
                id: route.params.id,
                id1: route.query.id1,
            }
        },
    },
]

const router = new VueRouter({
    routes
})

const app = new Vue({
    router
}).$mount('#app')


