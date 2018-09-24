Vue.component('my-transition', {
    template: `
        <transition name="my-transition" 
                v-on:before-enter="beforeEnter"
                v-on:enter="enter"
                v-on:leave="leave">
            <slot><slot>
        </transition>
    `,
    methods: {
        leave(el, done) {
            el.style.opacity = 1.0;
            function a() {
                setTimeout(() => {
                    var opacity = parseFloat(el.style.opacity);
                    if (opacity <= 0) {
                        done();
                    } else {
                        el.style.opacity = opacity - 0.1;
                        a();
                    }
                }, 200)
            }
            a();
        },
        beforeEnter(el) {
            el.style.opacity = 0
        },
        enter(el, done) {
            function a() {
                setTimeout(() => {
                    var opacity = parseFloat(el.style.opacity);
                    if (opacity >= 1) {
                        done();
                    } else {
                        el.style.opacity = opacity + 0.1;
                        a();
                    }
                }, 200)
            }
            a();
        },
    }
}) 

let vm1 = new Vue({
    el: '#vm1',
    data: {
        show: true,
    },
    methods: {

    }
})