const UserNav = {
    template: `
        <div>
            <router-link to="/user/profile">profile</router-link>
            <router-link to="/user/posts">posts</router-link>
        </div>
    `,
}

const User = {
    template: `
        <div class="user">
            <h2>User</h2>
            <UserNav/>
            <p>
                <router-view name="c"></router-view>
                <router-view name="d"></router-view>
            </p>
        </div>
    `,
    components: {
        UserNav,
    },
    methods: {
    },
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

const routes1 = [
    {
        path: '/user',
        components: {
            default: User,
            a: Profile,
            b: Posts,
        },
    },
]

const routes2 = [
    {
        path: '/user',
        components: {
            default: User,
        },
        children: [
            {
                path: 'profile',
                components: {
                    c: Profile,
                },
            },
            {
                path: 'posts',
                components: {
                    c: Posts,
                },
            }            
        ],
    },
]

const router = new VueRouter({
    routes: routes2,
})

router.push('/user')

const app = new Vue({
    router
}).$mount('#app')


