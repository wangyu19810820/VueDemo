const User = {
    template: '<div>user:<router-view></router-view></div>',
    data: function() {
        return {
            a: 'aaa',
        }
    },
    beforeRouteEnter(to, from, next) {
        console.log('router.beforRouteEnter.user');
        next(vm => {
            // 所有预处理守卫调用结束后，调用
            console.log('next:' + vm.a)
        });            
    },
    beforeRouteUpdate (to, from, next) {
        console.log('router.beforeRouteUpdate.user');
        console.log(this.a)
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
        const answer = window.confirm('确定离开')
        if (answer) {
            next(); 
        } else {
            next(false); 
        }
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
                beforeEnter: (to, from, next) => {
                    console.log('router.beforEnter.foo');
                    next();            
                },
            },
            {
                path: 'bar',
                component: Bar,
                beforeEnter: (to, from, next) => {
                    console.log('router.beforEnter.bar'); 
                    next();        
                },
            },
            {
                path: 'foo1',
                component: Bar,
                beforeEnter: (to, from, next) => {
                    next('/user/foo');            
                },
            },
            {
                path: 'foo2',
                component: Bar,
                beforeEnter: (to, from, next) => {
                    next(new Error("自定义错误"));            
                },
            }
        ],
    }

]

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    console.log('router.beforeEach');
    next();
})

router.afterEach((to, from) => {
    console.log('router.afterEach');
})

router.onError((e) => {
    console.log('router.onError')
    console.log(e)
})

const app = new Vue({
    router,
    data: {
        a: 'aa',
    }
}).$mount('#app')


