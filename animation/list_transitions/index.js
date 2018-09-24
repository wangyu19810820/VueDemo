new Vue({
    el: '#vm1',
    data: {
        items: [1, 2, 3, 4, 5],
        maxNum: 6,
    },
    methods: {
        randomIndex() {
            return Math.floor(Math.random() * this.items.length);
        },
        add() {
            this.items.splice(this.randomIndex(), 0, this.maxNum);
            this.maxNum++;
        },
        remove() {
            this.items.splice(this.randomIndex(), 1);
        },
    }
}) 

new Vue({
    el: '#vm2',
    data: {
        items: [1, 2, 3, 4, 5],
        maxNum: 6,
    },
    methods: {
        randomIndex() {
            return Math.floor(Math.random() * this.items.length);
        },
        add() {
            this.items.splice(this.randomIndex(), 0, this.maxNum);
            this.maxNum++;
        },
        remove() {
            this.items.splice(this.randomIndex(), 1);
        },
        shuffle() {
            this.items = this.items.sort(() => {
                return Math.random() - 0.5;
            });
        }
    }
}) 

new Vue({
    el: '#vm3',
    data: {
        items: new Array(100).fill(1).map((v, i) => i),
    },
    methods: {
        shuffle() {
            this.items = this.items.sort(() => {
                return Math.random() - 0.5;
            });
        }
    }
}) 

new Vue({
    el: '#vm4',
    data: {
        items: ['aaa', 'abc', 'abcd', 'xyz'],
        query: 'a',
    },
    computed: {
        computedList() {
            return this.items.filter((item) => {
                if (this.query.trim() == '') {
                    return true;
                } else {
                    return item.toLowerCase().indexOf(this.query) !== -1;
                }
                
            })
        }
    },
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
                }, 100)
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
                }, 100)
            }
            a();
        },
    }
}) 

