Vue.component('my-component1', {
    template: `
        <div>my-component1</div>
    `,
})

Vue.component('my-component2', {
    template: `
        <div>my-component2</div>
    `,
})

Vue.component('async-component', function(resolve, reject) {
    setTimeout(function(){
        resolve({
            template:'<div>async-component</div>'
        })
    }, 1000);
})

let vm1 = new Vue({
    el: '#vm1',
    data: {
        curComponent: '',
    },
    
})