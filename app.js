new Vue({
    el:'#app',
    data:{
        age: 25,
        title: 'Hello',
        transition: 'Transition',
        show: true,
    },
    filters:{
        uppercase: function (value) {
            return value.toUpperCase();
        },
        lowercase: function (value) {
            return value.toLowerCase();
        }
    },
    methods:{
        add: function () {
            this.age++;
        },
        subtract: function () {
            this.age--;
        },
        updateXY:function (event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        logName:function () {
            console.log('you entered your name');
        }
    }

});