// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router.js'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: {
    App,
  },
  //[App]コンポーネントに対しdata全てを紐付けるやりかたは良くない。
  template: `<App v-bind:store="dataStore"/>`, 
  data: {
    //複数種dataをv-bindしようとすると怒られるので回避
    dataStore:{
      dataList: [],
      updateRecord: {
        id: '12345',
        name: '柳田格之進'
      },
      hoge: 'hogehoge',
    }
  },
  methods: {
  },

});