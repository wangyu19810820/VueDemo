var MyPlugin = {};
MyPlugin.install = function(Vue, options) {
    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function() {

    }
    // 2. 全局资源，指令
    Vue.directive('focus', {
        bind(el) {
            el.focus();
            el.style.backgroundColor = options.backgroundColor;
        }
    })
    // 3. 混入
    Vue.mixin({
        created: function() {
            console.log('MyPlugin mixin created');
        }
    })
    // 4. 添加实例方法
    Vue.prototype.$myMethod = function(methodOptions) {
        console.log('myMethod:' + methodOptions);
    }
}

Vue.use(MyPlugin, {backgroundColor: 'red'});

let vm1 = new Vue({
    el: '#vm1',
    data: {
        show: true,
        text1: '',
    },
})

vm1.$myMethod('abc');
