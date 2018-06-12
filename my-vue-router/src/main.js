// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router.js'

Vue.config.productionTip = false

//TODO このままでは読めない
new Vue({
  el: '#app',
  router,
  components: {
    App,
  },
  template: '<App/>',
  data: {
    dataList: [],
    updateRecord: {
      id: null,
      name: null
    },
    hoge: 'hogehoge',
  },
  methods: {
  },
});