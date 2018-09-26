Vue.component('anchored-heading', {
    render: function (createElement) {
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
        return createElement('h1', 'title:' + this.blogTitle);
    },
    props:['blogTitle'],
})

Vue.component('my-component2', {
    render: function (createElement) {
        return createElement(
            'div',
            {},
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
                    }
                })
            ]);
    },
})

let vm1 = new Vue({
    el: '#vm1',
    data: {
        
    },

})

