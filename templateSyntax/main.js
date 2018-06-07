const vm = new Vue({
  el: '#myApp',
  data: {
    message: {
      value: 'data binding message.'
    },
    list: ['りんご', 'バナナ', 'いちご'],
    radius: 50, //this.radius / vm.radius で制御する
    classState: {
      isActive: true, //classの切り替えを this.classState.isActive を通じて制御していることに注目
    },
  },
  created: function () {

  },
  methods: {
    switchState() {
      this.classState.isActive = !this.classState.isActive;
    }
  },
});
