var store = {
    debug: true,
    state: {
        message: '',
    },
    setMessage(msg) {
        if (this.debug) {
            console.log('setMessage:' + msg)
        }
        this.state.message = msg;
    },
    clearMessage() {
        if (this.debug) {
            console.log('clearMessage')
        }
        this.state.message = '';
    }
}

let vm1 = new Vue({
    el:"#vm1",
    data: {
        shareState: store.state,
    },
    methods: {
        clear() {
            store.clearMessage();
        },
        setMsg(event) {
            store.setMessage(event.target.value);
        }
    }
})

let vm2 = new Vue({
    el:"#vm2",
    data: {
        shareState: store.state,
    },
    methods: {

    }
})
