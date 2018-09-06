// 响应式属性值修改后，会自动修改视图
// 但是一次性绑定(v-once)的值是不会被修改的
let vm1 = new Vue({
    el: '#vm1',
    data: {
        msg: 'hello'
    },
    methods: {
        changeMsg(){
            this.msg = 'hi';
        }
    }
})

// 在视图上输出原始html
let vm2 = new Vue({
    el: '#vm2',
    data: {
        rawHtml: '<em>The em text</em>',
    }
})

// 在html的attribute上，不能应用插值，而要用html特性绑定
let vm3 = new Vue({
    el: '#vm3',
    data: {
        dynamicId:'id1',
        isDisabled: true,
    },
    methods: {
        change() {
            this.isDisabled = !this.isDisabled;
            document.getElementById(this.dynamicId).innerHTML = 'bbb';
        }
    }
})

// 在插值中使用表达式，在绑定中也可以使用表达式
let vm4 = new Vue({
    el: '#vm4',
    data: {
        number: 0,
        ok: true,
        message: 'abcdefg',
    }
})

// v-if指令，控制内容是否显示
let vm5 = new Vue({
    el: '#vm5',
    data: {
        seen: 'some content',
        emptyContent: '',
    },
})

// 指令能接受一个参数，在指令后跟冒号表示。
// 比如html的Attribute绑定，v-bind后接Attribute名
// 比如html的事件绑定，v-on后接事件名
let vm6 = new Vue({
    el: '#vm6',
    data: {
        urlStr: 'http://www.baidu.com',
    },
    methods: {
        changeUrl() {
            this.urlStr = 'http://www.sina.com.cn';
        }
    }
})

// 指令的修饰符，表明执行该指令附带的额外操作
// .prevent可以阻止表单提交
let vm7 = new Vue({
    el: '#vm7',
    data: {

    },
    methods: {
        onSubmit() {
            console.log('onSubmit');
        }
    }
})

// 指令的缩写
// 如v-bind:href可写为:href
// 如v-on:click可写为@click
let vm8 = new Vue({
    el: '#vm8',
    data: {
        urlStr: 'http://www.baidu.com',
    },
    methods: {
        changeUrl() {
            this.urlStr = 'http://www.sina.com.cn';
        }
    }
})