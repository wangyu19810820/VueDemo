let vm1 = new Vue({
    el: '#vm1',
    data: {
        show: true,
        transitionName: 'fade1',
    },
})

let vm2 = new Vue({
    el: '#vm2',
    data: {
        show: true,
        timeLength: 150,
    },
    methods: {
        beforeEnter(el) {
            el.style.opacity = 0
        },
        enter(el, done) {
            self = this;
            function a() {
                setTimeout(() => {
                    var opacity = parseFloat(el.style.opacity);
                    if (opacity >= 1) {
                        done();
                    } else {
                        el.style.opacity = opacity + 0.1;
                        a();
                    }
                }, self.timeLength)
            }
            a();
        },
        leave(el, done) {
            el.style.opacity = 1.0;
            self = this;
            function a() {
                setTimeout(() => {
                    var opacity = parseFloat(el.style.opacity);
                    if (opacity <= 0) {
                        done();
                    } else {
                        el.style.opacity = opacity - 0.1;
                        a();
                    }
                }, self.timeLength)
            }
            a();
        },
       
    }
})