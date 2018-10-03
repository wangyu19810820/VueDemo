const User = {
    template: `
        <div class="user">
            <h2>User {{ $route.params.id }}</h2>
            <p>
                <button @click="link1">跳转1</button>
                <button @click="link2">跳转2</button>
                <button @click="link3">跳转3</button>
                <button @click="link4">跳转4</button>
                <button @click="link5">跳转5</button>
                <button @click="link6">跳转6</button>
                <button @click="link7">跳转7</button>
            </p>
            <router-link to="/user/1/profile">profile</router-link>
            <router-link to="/user/1/posts">posts</router-link>
            <router-link :to="{name: 'name3', params:{address: 'shanghai'}}">profile1</router-link>
            <router-view></router-view>
        </div>
    `,
    methods: {
        link1() {
            this.$router.push('/user/1/profile');
        },
        link2() {
            this.$router.push({
                path: '/user/1/posts',
            })
        },
        link3() {
            this.$router.push({
                name: 'name3',
            });
        },
        link4() {
            this.$router.push({
                path: '/user/1/profile',
                query: {
                    name: 'wy',
                }
            });
        },
        link5() {
            const userId = 2;
            // this.$router.push({ path: `/user/${userId}` }) 
            
            // path用query传参，name用params传参
            this.$router.push({
                name: 'name3',
                params: {
                    id: userId,
                    address: 'nanjing',
                }
            });
        },
        link6() {
            this.$router.replace('/user/1/profile');
        },
        link7() {
            this.$router.go(-1);
        },
    },
}

const Profile = {
    template: `
        <div class="user">profile:{{ $route.query.name }}，{{ $route.params }}</div>
    `,
}

const Posts = {
    template: `
        <div class="user">posts</div>
    `,
}

const routes = [
    {
        name: 'name1',
        path: '/user',
        component: User,
    },
    {
        name: 'name2',
        path: '/user/:id',
        component: User,
        children: [
            {
                name: 'name3',
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


