// 全局指令
Vue.directive('focus', {
    bind: function() {
        console.log('focus-bind');
    },
    inserted: function(el) {
        console.log('focus-inserted');
        el.focus();
    },
    update: function() {
        console.log('focus-update');
    },
    componentUpdated: function() {
        console.log('focus-componentUpdated');
    },
    unbind: function() {
        console.log('focus-unbind');
    },
})

// 简写，仅有bind和update钩子，且为同一个函数
Vue.directive('bgColor', function(el, binding) {
    el.style.backgroundColor = binding.value;
})

Vue.directive('styleDirective', function(el, binding) {
    el.style.backgroundColor = binding.value.backgroundColor;
    el.style.color = binding.value.color;
})

let vm1 = new Vue({
    el: '#vm1',
    data: {
        show: true,
        text1: '',
    },
    directives: {
        // 实例内指令
        redBg: {
            inserted: function(el) {
                el.style.backgroundColor = 'red';
            },
            update: function(el, binding, vnode, oldVnode) {
                console.log('name:' + binding.name);
                console.log('value:' + binding.value);
                console.log('oldValue:' + binding.oldValue);
                console.log('expression:' + binding.expression);
                console.log('arg:' + binding.arg);
                console.log('modifiers:' + JSON.stringify(binding.modifiers));
                console.log(vnode);
                console.log(oldVnode);
            },
        }
    }
    
})