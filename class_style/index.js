// v-bind:class指定css的class，采用对象形式，
// 对象仅有一个键值对，键是class名，值是是否启用
// 是否启用，不一定是true或false，只要能转换成true，false就可以了(truthy, falsy)
let vm1 = new Vue({
    el: '#vm1',
    data: {
        isRedColor: true,
        isBlueBg: true,
    }
});

// v-bind:class指定css的class，采用对象形式，
// 也可以不使用内联形式，而使用计算属性
let vm2 = new Vue({
    el: '#vm2',
    data: {
        isRedColor: true,
        isBlueBg: true,
    },
    computed: {
        classObject: function() {
            return {
                redColor: this.isRedColor,
                'blueBg': this.isBlueBg,
            }
        }
    }
})

// v-bind:class指定css的class，采用数组形式
let vm3 = new Vue({
    el: '#vm3',
    data: {
        classOne: 'redColor',
    }
});

// v-bind:class指定css的class，采用数组形式
// 数组内是对象，对象仅有一个键值对，键是class名，值是是否启用
let vm4 = new Vue({
    el: '#vm4',
    data: {
        isRedColor: true,
        isBlueBg: true,
    },
    computed: {
        classArray: function() {
            var arr = [];
            arr.push({redColor: this.isRedColor});
            arr.push('blueBg');
            return arr;
        }
    },
})

// v-bind:class也可以用于组件上，会和组件上原有class叠加
// 组件需写在宿主Vue对象之前
Vue.component('my-component', {
    template: '<p class="italicFont">hello vue</p>'
  })
let vm5 = new Vue({
    el:'#vm5',
})

let vm6 = new Vue({
    el:'#vm6',
    data: {
        curColor: 'red',
        curFontSize: 18,
    },
    computed: {
        styleObject: function() {
            return {
                color: this.curColor,
                fontSize: this.fontSize + 'px',
            }
        },
        styleObject1: function() {
            return {
                'background-color': 'blue',
            }
        }
    }
})