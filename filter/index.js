// 全局过滤器
Vue.filter('capitalize', function(value) {
    if (!value) {
        return '';
    }
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
})

let vm1 = new Vue({
    el: '#vm1',
    data: {
        
    },
    // 实例过滤器
    filters: {
        // 过滤器可以级联使用
        'lowcaseFilter': function(value) {
            if (!value) {
                return '';
            }
            return value.toString().toLowerCase();
        },
        // 过滤器，可以有额外的参数
        'concatFilter': function(value, arg1, arg2) {
            var result = '';
            if (value) {
                result += value.toString();
            }
            if (arg1) {
                result += arg1.toString();
            }
            if (arg2) {
                result += arg2.toString();
            }
            return result;
        }
    }
})

