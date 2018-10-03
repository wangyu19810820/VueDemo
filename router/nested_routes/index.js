const User = {
    template: `
        <div class="user">
            <h2>User {{ $route.params.id }}</h2>
            <router-link to="/user/1/profile">profile</router-link>
            <router-link to="/user/1/posts">posts</router-link>
            <router-view></router-view>
        </div>
    `,
}

const Profile = {
    template: `
        <div class="user">profile</div>
    `,
}

const Posts = {
    template: `
        <div class="user">posts</div>
    `,
}

const routes = [
    {
        path: '/user/:id',
        component: User,
        children: [
            {
                path: 'profile',
                component: Profile,
            },
            {
                path: 'posts',
                component: Posts,
            }
        ],
    },
]

const router = new VueRouter({
    routes: routes,
})

const app = new Vue({
    router
}).$mount('#app')


