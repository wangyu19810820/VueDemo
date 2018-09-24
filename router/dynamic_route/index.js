const User = { 
    template: `
        <div>
            <p>User Post</p>
            <p>user:{{ $route.params.username }}</p>
            <p>{{ $route.params.postTitle }}</p>
        </div>
    `,
    watch: {
        '$route' (to, from) {
            console.log('watch');
            console.log(to);
            console.log(from);
        }
    },
    beforeRouteUpdate(to, from, next) {
        console.log('beforeRouteUpdate')
        console.log(to);
        console.log(from);
        next();
    },
}

const User1 = { 
    template: `
        <div>
            <p>Normal User</p>
            <p>user:{{ $route.params.username }}</p>
        </div>
    `,
}

const User2 = {
    template: `
        <div>
            <p>Default User</p>
        </div>
    `,
}

const router = new VueRouter({
    routes: [
        { path: '/user/:username/post/:postTitle', component: User },
        { path: '/user/:username/*', component: User1 },
        { path: '/user/:username/*', component: User1 },
    ]
})

const app = new Vue({
    router
}).$mount('#app')

