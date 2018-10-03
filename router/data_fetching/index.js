const Foo = { 
    template: `
        <div>
            <div v-if="loading">Loading...</div>
            <div v-if="error">{{ error }}</div>
            <div v-if="post">
                <h2>post title:{{ post.title }}</h2>
                <p>{{ post.content }}</p>
            </div>
        </div>
    `,
    data() {
        return {
            loading: false,
            post: null,
            error: null,
        }
    },
    methods: {
        fetchData() {
            this.error = this.post = null;
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
                this.post = {
                    title: 'post' + this.$route.params.id,
                    content: 'content' + this.$route.params.id
                };
            }, 1000);
        }
    },
    created() {
        console.log('created')
        this.fetchData();
    },
    watch: {
        '$route': function() {
            console.log('watch route')
            this.fetchData();
        },
    }
}

const Bar = { 
    template: `
        <div>
            <div v-if="error">{{ error }}</div>
            <div v-if="address">
                <p>city:{{ address.city }}</p>
                <p>road:{{ address.road }}</p>
            </div>
        </div>
    `,
    data: function() {
        return {
            error: null,
            address: null,
        }
    },
    methods: {
        setData(err, address) {
            if (err) {
                this.error = err.toString();
            } else {
                this.address = address;
            }
        }
    },
    beforeRouteEnter(to, from, next) {
        setTimeout(() => {
            next(vm => {
                vm.setData(null, {
                    city: 'nanjing' + to.params.id, 
                    road: 'yuhua' + to.params.id,
                })
            })
        }, 1000);
    },
    beforeRouteUpdate(to, from, next) {
        setTimeout(() => {
            this.setData(null, {
                city: 'nanjing' + to.params.id, 
                road: 'yuhua' + to.params.id,
            });
            next();
        }, 1000);        
    }
}

const routes = [
    {
        path: '/foo/:id',
        component: Foo,
    },
    {
        path: '/bar/:id',
        component: Bar,
    }
]

const router = new VueRouter({
    routes
})

const app = new Vue({
    router
}).$mount('#app')


