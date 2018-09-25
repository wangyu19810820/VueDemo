let vm1 = new Vue({
    el: '#vm1',
    data: {
        number: 0,
        tweenedNumber: 0,
    },
    computed: {
        animatedNumber() {
            return this.tweenedNumber.toFixed(0);
        }
    },
    watch: {
        number(newValue) {
            TweenLite.to(this.$data, 0.5, { tweenedNumber: newValue });
        }
    }
})

var Color = net.brehaut.Color
let vm2 = new Vue({
    el: '#vm2',
    data: {
        colorQuery: '',
        color: {
            red: 0,
            green: 0,
            blue: 0,
            alpha: 1,
        },
        tweenedColor: {},
    },
    watch: {
        color: function () {
          function animate () {
            if (TWEEN.update()) {
              requestAnimationFrame(animate)
            }
          }
    
          new TWEEN.Tween(this.tweenedColor)
            .to(this.color, 750)
            .start()
    
          animate()
        }
    },
    created: function() {
        this.tweenedColor = Object.assign({}, this.color)
    },
    computed: {
        tweenedCSSColor: function () {
          return new Color({
            red: this.tweenedColor.red,
            green: this.tweenedColor.green,
            blue: this.tweenedColor.blue,
            alpha: this.tweenedColor.alpha
          }).toCSS()
        }
    },
    methods: {
        updateColor: function () {
            this.color = new Color(this.colorQuery).toRGB()
            this.colorQuery = ''
        }
    },
})

Vue.component('animated-integer', {
    template: `<span>{{ tweeningValue }}</span>`,
    data: function() {
        return {
            tweeningValue: 0,
        }
    },
    props: {
        value: {
            type: Number,
            required: true,
        }
    },
    watch: {
        value: function (newValue, oldValue) {
          this.tween(oldValue, newValue)
        }
    },
    mounted: function () {
        
        this.tween(0, this.value)
    },
    methods: {
        tween(startValue, endValue) {
            
            var vm = this;
            // console.log(vm.$data.tweeningValue)
            function animate () {
                if (TWEEN.update()) {
                    requestAnimationFrame(animate)
                }
            }
            new TWEEN.Tween(startValue)
                .to(endValue, 500)
                .onUpdate(function (object) {
                    vm.tweeningValue = (object * (endValue - startValue) + startValue).toFixed(0);
                    console.log(vm.tweeningValue)
                })
                .start()
        
            animate()
        }
    }
});

// Vue.component('animated-integer', {
//     template: '<span>{{ tweeningValue1 }}</span>',
//     props: {
//       value: {
//         type: Number,
//         required: true
//       }
//     },
//     data: function () {
//       return {
//         tweeningValue: 0
//       }
//     },
//     computed: {
//         tweeningValue1: function() {
//             return this.tweeningValue.toFixed(0);
//         }
//     },
//     watch: {
//         value: function (newValue, oldValue) {
//             console.log('aa' + newValue)
//             TweenLite.to(this.$data, 0.5, { tweenedNumber: newValue });
//         }
//     },
    // mounted: function () {
    //     TweenLite.to(this.$data, 0.5, { tweenedNumber: newValue })
    // },
    // methods: {
    //     tween: function (startValue, endValue) {
    //         var vm = this
    //         function animate () {
    //             if (TWEEN.update()) {
    //                 requestAnimationFrame(animate)
    //             }
    //         }
  
    //         new TWEEN.Tween({ tweeningValue: startValue })
    //             .to({ tweeningValue: endValue }, 500)
    //             .onUpdate(function (object) {
    //                 vm.tweeningValue = object.toFixed(0)
    //             })
    //             .start()
  
    //         animate()
    //   }
    // }
// })
  

let vm3 = new Vue({
    el: '#vm3',
    data: {
        firstNumber: 20,
        secondNumber: 40,
    },
    computed: {
        resultNumber: function () {
            return this.firstNumber + this.secondNumber
        }
    }
})