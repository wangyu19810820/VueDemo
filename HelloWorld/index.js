let myApp = new Vue({
    el:"#myApp",
    data:{
        message:"hello world",
    },
})

myApp.message = "vue hello";

let myApp2 = new Vue({
    el:"#myApp2",
    data:{
        message: '文档加载时间是' + new Date(),
    },
})

let myApp3 = new Vue({
    el:"#myApp3",
    data:{
        seen:true,
    }
})

let myApp4 = new Vue({
    el:"#myApp4",
    data:{
        todoList:[{text:"aa"}, {text:"bb"}, {text:"cc"}],
    }
})

let myApp5 = new Vue({
    el:"#myApp5",
    data:{
        message:"abcdef",
    },
    methods:{
        reverseMessage:function(){
            this.message = this.message.split("").reverse().join("");
        }
    }
})

let myApp6 = new Vue({
    el:'#myApp6',
    data:{
        message:"abcdef",
    }
})

Vue.component('todo-item', {
    props: ['todo_item'],
    template: '<li>{{ todo_item.text }}</li>'
  })
let myApp7 = new Vue({
    el:'#myApp7',
    data:{
        todoList:[
            {id:1, text:'aaa'},
            {id:2, text:'bbb'},
            {id:3, text:'ccc'},
        ],
    }
})