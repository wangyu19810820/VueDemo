var data = {a:1};

// 创建一个Vue实例
var vm = new Vue({
    // data中的响应式数据，数据发生变化时，视图会自动更新
    data: data
});

// 对响应式数据的一些操作
// true
console.log(data.a === vm.a);

// 打印2
vm.a = 2;
console.log(data.a);

// 打印3
data.a = 3;
console.log(vm.a);

// 响应式数据最好能赋予初值，后续新增的无响应效果
var data1 = {
    newTodoText: '',
    visitCount: 0,
    hideCompletedTodos: false,
    todos: [],
    error: null,
}

// 修改响应式属性会，视图会自动更新，除非对象不能更改
var data2 = {
    foo: 'baz',
}
Object.freeze(data2);

var vm2 = new Vue({
    el: '#vm2',
    data: data2,
})

// 使用$，引用Vue自带变量
var data3 = {a: 1};
var vm3 = new Vue({
    el: '#vm3',
    data: data3,
})
// 打印true，true
console.log(vm3.$data === data3);
console.log(vm3.$el === document.getElementById('vm3'));

// 生命周期
var vm4 = new Vue({
    el: '#vm4',
    data: {
        a: 1,
    },
    created:function() {
        console.log('create');
    }
})