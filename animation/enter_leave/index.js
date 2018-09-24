new Vue({
    el: '#vm1',
    data: {
        show: true,
    },
}) 

new Vue({
    el: '#vm2',
    data: {
      show: true
    }
})

new Vue({
    el: '#vm3',
    data: {
      show: true
    }
})

new Vue({
    el: '#vm4',
    data: {
      show: true
    },
    methods: {
        beforeEnter() {
            console.log('beforeEnter')
        },
        enter() {
            console.log('enter')
        },
        afterEnter() {
            console.log('afterEnter')
        },
        enterCancelled() {
            console.log('enterCancelled')
        },
        beforeLeave() {
            console.log('enterCancelled')
        },
        leave() {
            console.log('leave')
        },
        afterLeave() {
            console.log('afterLeave')
        },
        leaveCancelled() {
            console.log('leaveCancelled')
        },
    }
})

new Vue({
    el: '#vm5',
    data: {
      show: true,
    },
    methods: {
        beforeEnter(el) {
            console.log('beforeEnter')
            el.style.opacity = 0;
        },
        enter(el, done) {
            function a() {
                setTimeout(()=>{
                    if (parseFloat(el.style.opacity) >= 1) {
                        done()
                    } else {
                        el.style.opacity = parseFloat(el.style.opacity) + 0.1;
                        a();
                    }
                }, 100);
            }
            a();
        },
        afterEnter(el) {
            console.log('afterEnter')
            clearInterval(this.handle)
        },
        beforeLeave(el) {
            console.log('enterCancelled')
            el.style.opacity = 1;
        },
        leave(el, done) {
            function a() {
                setTimeout(()=>{
                    if (parseFloat(el.style.opacity) <= 0) {
                        done()
                    } else {
                        el.style.opacity = el.style.opacity - 0.1;
                        a();
                    }
                }, 100);
            }
            a();
        },
        afterLeave() {
            console.log('afterLeave')
            clearInterval(this.handle)
        },
    }
})

new Vue({
    el: '#vm6',
    data: {
      show: true,
    },
})

new Vue({
    el: '#vm7',
    data: {
      show: true,
    },
    methods: {
        beforeAppear(el) {
            el.style.opacity = 0;
        },
        appear(el, done) {
            function a() {
                setTimeout(()=>{
                    if (parseFloat(el.style.opacity) >= 1) {
                        done()
                    } else {
                        el.style.opacity = parseFloat(el.style.opacity) + 0.1;
                        a();
                    }
                }, 200);
            }
            a();
        }
    }
})

new Vue({
    el: '#vm8',
    data: {
      show: true,
    },
});

new Vue({
    el: '#vm9',
    data: {
      show: true,
    },
});

new Vue({
    el: '#vm10',
    data: {
      show: true,
    },
});

new Vue({
    el: '#vm11',
    data: {
      nameList:['com1', 'com2', 'com3'],
      pick: '',
    },
    components: {
        'com1': {
            template: `<div>component1</div>`,
        },
        'com2': {
            template: `<div>component2</div>`,
        },
        'com3': {
            template: `<div>component3</div>`,
        },
    },
});

