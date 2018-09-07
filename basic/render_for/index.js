let vm1 = new Vue({
    el: '#vm1',
    data: {
        msgArr: ['aa', 'bb', 'cc'],
        someObj: {
            a: 'aa',
            b: 'bb',
            c: 'cc',
        },
    },
});

let vm2 = new Vue({
    el: '#vm2',
    data: {
        itemArr: [
            {id: 1, text:'aa'},
            {id: 2, text:'bb'},
            {id: 3, text:'cc'},
        ],
    },
    methods: {
        changeItemArr: function() {
            this.itemArr = [
                {id: 3, text:'ccc'},
                {id: 2, text:'bbb'},
                {id: 1, text:'aa'},
            ]
        }
    }
});

let vm3 = new Vue({
    el: '#vm3',
    data: {
        msgArr: ['aa', 'bb', 'cc'],
    },
    methods: {
        change1: function() {
            this.msgArr[1] = 'dd';
        },
        change2: function() {
            this.msgArr.length = 2;
        },
        change3: function() {
            Vue.set(this.msgArr, 1, 'dd');
            vm3.$set(this.msgArr, 2, 'ee');
        },
        change4: function() {
            vm3.msgArr.splice(2);
        },
    }
});

let vm4 = new Vue({
    el: '#vm4',
    data: {
        nums: [1, 3, 4, 2, 5],
    },
    computed: {
        evenNums:function() {
            return this.nums.filter((num) => num % 2 == 0);
        },
        sortNums: function(numArr) {
            return Object.create(this.nums).sort((num1, num2) => num2 - num1);
        },
    },
    methods: {
        sort: function(numArr) {
            var newArr = Array.from(numArr);
            return newArr.sort((num1, num2) => num1 > num2);
        },
        even:function(numArr) {
            return numArr.filter((num) => num % 2 == 0);
        }
    }
});

let vm5 = new Vue({
    el: '#vm5',
    data: {
        someObj: {
            a: 'aa',
            b: 'bb',
            c: 'cc',
        },
    },
});

let vm6 = new Vue({
    el: '#vm6',
    data: {
        someObj: {
            a: 'aa',
            b: 'bbb',
            c: 'cccc',
        },
    },
});

Vue.component('hero-name', {
    template: '<li>{{ id }}:{{ name }}<button v-on:click="$emit(\'remove\')">Remove</button></li>',
    props: ['id', 'name'],
});
let vm7 = new Vue({
    el: '#vm7',
    data: {
        maxIndex: 1,
        heroArray: [],
        inputHeroName: '',
    },
    methods: {
        onSubmit() {
            this.heroArray.push({id: this.maxIndex, name: this.inputHeroName});
            this.maxIndex++;
            this.inputHeroName = '';
        }
    }
});