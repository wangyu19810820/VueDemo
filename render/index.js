Vue.component('anchored-heading', {
    render: function (createElement) {
        // 访问插槽
        return createElement('h' + this.level, this.$slots.default);
    },
    props: {
        level: {
            type: Number,
            required: true,
        }
    },
})

Vue.component('my-component1', {
    render: function (createElement) {
        return createElement(
            'h1', 
            {
                style: {
                    color: 'red',
                }
            },
            'title:' + this.blogTitle);
    },
    props:['blogTitle'],
})

Vue.directive('my-directive', {
    inserted(el, binding) {
        el.style.fontSize = binding.value + 'px';
    }
})

Vue.component('my-component2', {
    render: function (createElement) {
        return createElement(
            'div',
            {
                style: {
                    border: '1px solid black'
                }
            },
            [
                '一些文字',
                createElement('h1', '某个标题'),
                createElement('my-component1', {
                    'class': {
                        redColor: true,
                        blueBg: false,
                    },
                    style: {
                        fontStyle: 'italic',
                    },
                    attrs: {
                        id: 'id2',
                    },
                    props: {
                        blogTitle: 'hi'
                    },
                    domProps: {
                        // innerHTML: 'bz',
                    },
                    nativeOn: {
                        click: function () {
                            console.log('nativeOn')
                        }
                    },
                    on: {
                        click: function () {
                            console.log('on')
                        }
                    },
                    directives: [{
                        name: 'my-directive',
                        value: '13',
                    }],
                })
            ]
        );
    },
})

// 文档所这个写法是错误的，应该如下例所示，实际上可能也能勉强运行
// Vue.component('my-component3', {
//     render: function (createElement) {
//         var myParagraphVNode = createElement('p', 'hi')
//         return createElement('div', [
//             myParagraphVNode, myParagraphVNode
//         ])
//     }
// });

Vue.component('my-component3', {
    render: function (createElement) {
        var myParagraphVNode1 = createElement('p', 'hi');
        var myParagraphVNode2 = createElement('p', 'hi');
        return createElement('div', [
            myParagraphVNode1, myParagraphVNode2
        ])
    }
});

// 自己实现v-for和v-if的功能
Vue.component('my-component4', {
    props: ['items'],
    render: function (createElement) {
        if (this.items && this.items.length > 0) {
            return createElement('ul', this.items.map((item) => {
                return createElement('li', item);
            }));    
        } else {
            return createElement('p', 'No items found.')
        }
    }
});

// 自己实现v-model,依旧是数据绑定+事件绑定，模拟双向绑定
Vue.component('my-component5', {
    props: ['value'],
    render: function(createElement) {
        var self = this;
        return createElement('input', {
            domProps: {
                value: self.value,
            },
            on: {
                input: function(event) {
                    self.$emit('input', event.target.value);
                }
            }
        })
    }
})

// 指定事件类型的时候，!代表处于捕获阶段，~代表一次性事件
// 其余的特性如.stop,.prevent,.self,.enter都要靠代码实现
Vue.component('my-component6', {
    render: function(createElement) {
        return createElement('div', 
        {
            on: {
                '!click': function(event) {
                    if (event.target !== event.currentTarget) return;
                    console.log('div capture click');
                    event.stopPropagation()
                },
            }
        },
        [createElement('input', {
            on: {
                '~!click': function() {
                    console.log('input capture once click');
                },
            }
        })]);
    }
})

Vue.component('my-component7', {
    render: function (createElement) {
        // `<div><slot :text="message"></slot></div>`
        return createElement('div', [
          this.$scopedSlots.default({
            text: 'aa'
          })
        ])
    }
})

let vm1 = new Vue({
    el: '#vm1',
    data: {
        someValue: '',
    },

})

