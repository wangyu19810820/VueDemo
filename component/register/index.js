// 在html中，不区分大小写，所以组件标签要由驼峰式转换成kebab（全小写，驼峰转减号）
Vue.component('MyComponent1', {
    template: '<div>MyComponent1</div>',
});

// 但是在非html中，可以采用驼峰式写法
Vue.component('MyComponent2', {
    template: '<MyComponent1></MyComponent1>',
});

// 上两个是全局注册的组件，下面是局部注册组件
var myComponent3 = {
    template: '<div>Local Component</div>',
};

let vm1 = new Vue({
    el: '#vm1',
    components: {
        'my-component3': myComponent3,
    },
})