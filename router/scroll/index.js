const Foo = { 
    template: `
        <div>
            <p>foo</p>
            <p>foo</p>
            <p>foo</p>
            <p>foo</p>
            <p>foo</p>
            <button @click="$router.go(-1)">Go Back</button>
            <p>foo</p>
            <p id="anchor">foo</p>
            <p>foo</p>
            <p>foo</p>
            <p>foo</p>
        </div>
    `
}
const Bar = { 
    template: `
        <div>
            <p>bar</p>
            <p>bar</p>
            <p>bar</p>
            <p>bar</p>
            <p>bar</p>
            <button @click="$router.go(1)">Go Forward</button>
            <p>bar</p>
            <p id="anchor">bar</p>
            <p>bar</p>
            <p>bar</p>
            <p>bar</p>
        </div>
    `
}

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
    routes,
    scrollBehavior(to, from, savedPosition) {
        console.log(savedPosition)
        // 前进后退的时候，return savedPosition好像写不写都有效果
        if (savedPosition) {
            return savedPosition;
        }
        // 跳转到指定锚点
        if (to.hash) {
            return { selector: to.hash }
        }
        // 跳转到页面最上
        return { x: 0, y: 0 }
        
        // 返回Promise可以配合动画
        // return new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         resolve({ x: 0, y: 0 })
        //     }, 500)
        // })
    }
})

const app = new Vue({
    router
}).$mount('#app')


