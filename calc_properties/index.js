// 可以在属性和插值中调用js的表达式
// 如果表达式过于复杂，可以考虑用方法或者计算属性代替
// 其中计算属性是较推荐的写法，它能缓存结果，而方法会每次都重新计算
let vm1 = new Vue({
    el: '#vm1',
    data: {
        msg: 'abcdefg',
    },
    methods: {
        reverseFun() {
            return this.msg.split('').reverse().join('');
        }
    },
    // 计算属性
    computed: {
        reverseMsg: function() {
            return this.msg.split('').reverse().join('');
        }
    }
})

// 计算属性能自动检测响应式属性变化，重新计算正确结果
// watch方式也能检测某个响应式属性变化，更新另一些属性的值
// 同等需求的时候，计算属性能使代码简洁些，而watch适合做一些较繁重的任务
let vm2 = new Vue({
    el: '#vm2',
    data: {
        firstName1:'aa',
        lastName1:'bb',
        fullName1:'aa bb',
        firstName2:'cc',
        lastName2:'dd',
    },
    computed: {
        fullName2() {
            return this.firstName2 + ' ' + this.lastName2;
        }
    },
    watch: {
        firstName1:function() {
            this.fullName1 = this.firstName1 + ' ' + this.lastName1;
        },
        lastName1:function() {
            this.fullName1 = this.firstName1 + ' ' + this.lastName1;
        },
    }
})

// 计算属性默认只有一个get方法，也可以提供完整的get/set方法
let vm3 = new Vue({
    el: '#vm3',
    data: {
        firstName:'aa',
        lastName:'bb',
    },
    computed: {
        fullName:{
            get: function() {
                return this.firstName + ' ' + this.lastName;
            },
            set: function(val) {
                let strArr = val.split(' ');
                this.firstName = strArr[0];
                this.lastName = strArr[1];
            }
        }
    }
})

// 在watch中执行一个开销较大的操作
let vm4 = new Vue({
    el: '#vm4',
    data: {
        question: '',
        answer: '',
    },
    watch: {
        question: function() {
            this.debouncedGetAnswer()
        }
    },
    methods: {
        getAnswer: function() {
            var vm = this;
            axios.get('https://yesno.wtf/api')
                .then(
                    (response) => this.answer = _.capitalize(response.data.answer)
                )
                .catch(
                    (err) => {
                        vm.answer = 'error:' + err;
                    }
                );
            
        }
    },
    // 生命周期函数
    created: function () {
        // 延迟500毫秒,执行getAnswer方法
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
    },
})