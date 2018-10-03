const User = {
    template: `
        <div>
            user:
            <router-view></router-view>
        </div>
    `,
}
const Foo = { 
    template: `
        <transition name="fade1">
            <div>foo</div>
        </transition>
    `,
}
const Bar = { 
    template: `
        <transition name="fade2">
            <div>bar</div>
        </transition>
    ` 
}
const Address = {
    template: `
        <div>
            address
        </div>
    `,
}

const routes = [
    {
        path: '/user',
        component: User,
        children: [
            {
                path: 'foo',
                component: Foo,
            },
            {
                path: 'bar',
                component: Bar,
            },
        ],
    },
    {
        path: '/address',
        component: Address,
    },

]

const router = new VueRouter({
    routes
})

const app = new Vue({
    router,
    data: {
        transitionName: 'fade1',
    },
    watch: {
        '$route' (to, from) {
            console.log(to)
            if (to.path.indexOf('user') != -1) {
                this.transitionName = 'fade1';
            } else {
                this.transitionName = 'fade2';
            }
        }
    }
}).$mount('#app')


