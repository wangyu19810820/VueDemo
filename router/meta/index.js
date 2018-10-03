const User = {
    template: '<div>user:<router-view></router-view></div>',
    data: function() {
        return {
            a: 'aaa',
        }
    },
    beforeRouteEnter(to, from, next) {
        console.log('router.beforRouteEnter.user');
        next();            
    },
    beforeRouteUpdate (to, from, next) {
        console.log('router.beforeRouteUpdate.user');
        next();            
    },
    beforeRouteLeave (to, from, next) {
        console.log('router.beforeRouteLeave.user');
        next();            
    },
}
const Foo = { 
    template: '<div>foo</div>',
    beforeRouteEnter(to, from, next) {
        console.log('router.beforRouteEnter.foo');
        next();            
    },
    // 并不会被调用
    // beforeRouteUpdate (to, from, next) {
    //     console.log('router.beforeRouteUpdate.foo');
    //     next();            
    // },
    beforeRouteLeave (to, from, next) {
        console.log('router.beforeRouteLeave.foo');
        next(); 
    },
}
const Bar = { template: '<div>bar</div>' }

const routes = [
    {
        path: '/user',
        component: User,
        children: [
            {
                path: 'foo',
                component: Foo,
                meta: {
                    requireAuth: true,
                },
                beforeEnter: (to, from, next) => {
                    console.log('router.beforEnter.foo');
                    next();            
                },
            },
            {
                path: 'bar',
                component: Bar,
                meta: {
                    requireAuth: false,
                },
                beforeEnter: (to, from, next) => {
                    console.log('router.beforEnter.bar'); 
                    next();        
                },
            },
        ],
    }

]

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    console.log('router.beforeEach');
    console.log('requireAuth:' + to.meta.requireAuth)
    next();
})

router.afterEach((to, from) => {
    console.log('router.afterEach');
})

const app = new Vue({
    router,
    data: {
        a: 'aa',
    }
}).$mount('#app')


