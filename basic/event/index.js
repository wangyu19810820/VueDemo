let vm1 = new Vue({
    el: '#vm1',
    data: {
        counter: 0,
    },
    methods: {
        addCount(c) {
            console.log(c)
            // console.log(c.target.dataset.num)
            if (typeof c === "object") {
                if (typeof c.target.dataset.num === "undefined") {
                    this.counter++;
                } else {
                    this.counter += Number.parseInt(c.target.dataset.num);
                }  
            } else if (typeof c === "number") {
                this.counter += c;
            }
            
        }
    }
});

let vm2 = new Vue({
    el: '#vm2',
    data: {
    },
    methods: {
        clickInner() {
            console.log("clickInner");
        },
        clickMiddle() {
            console.log("clickMiddle");
        },
        clickOuter() {
            console.log("clickOuter");
        },
        keyUp() {
            console.log("keyUp");
        }
    },
});

let vm3 = new Vue({
    el: '#vm3',
    data: {
    },
    methods: {
        keyUp() {
            console.log("keyUp");
        },
        clickEvent() {
            console.log("clickEvent");
        },
    },
});