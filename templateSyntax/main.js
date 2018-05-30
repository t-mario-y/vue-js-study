const vm = new Vue({
  el: '#myApp',
  data:{
    message: {
      value: 'data binding message.'
    },
    list: ['りんご','バナナ','いちご']
  },
  created : function () {

  },
  methods : {
    buttonClick(){
      console.log('クリックされました。');
    }
  },
});
