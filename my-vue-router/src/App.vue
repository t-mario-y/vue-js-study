<template>
  <div id="app">
    <nav>
      <router-link to="/">一覧</router-link>
      <router-link to="/update">更新</router-link>
    </nav>
    <router-view 
      v-bind:dataList="workObjList" 
      v-bind:record="updateRecord" 
      v-bind:childHoge="hoge"
      v-on:select="execSelect" />
  </div>
</template>
<script>
import axios from 'axios';
const API_URI = 'https://work-time-log-api.herokuapp.com/workTimeLog';
export default {
  name: "App",
  data: function() {
    return {
      workObjList: [], //データの格納場所。宣言時は空
      updateRecord: { //作成/更新レコード
        id        : null,
        date      : null,
        startTime : null,
        endTime   : null,
        workingTime  : null,
      },
      hoge: "hogehoge",
    };
  },
  created() { //初期表示時に値を取得する
    this.execSelect();
  },
  methods: {
    //Web APIへのアクセス。execXXX
    execSelect(){
      axios.get(API_URI + '/select')
      .then((response) => {
        this.workObjList = response.data;
        console.log(`Select succeeded in Vue.js.`);
      }).catch((error) => {
        console.log(error);
      })
    },
    execInsert(){
      var target = this.updateRecord;
      axios.post(API_URI + '/insert', {
        //dateフォーマットを変換しないと日付が前にずれる。Herokuのリージョンがアメリカだから時差かも。
        'date'        : moment(target.date).format('YYYY/MM/DD'), 
        'startTime'   : target.startTime,
        'endTime'     : target.endTime,
        'workingTime' : target.workingTime,
      }).then((response) =>{ 
        console.log(`Insert succeeded in Vue.js : ${response.data}`);
        //再表示
        this.select();
        this.transPage('list');
      }).catch((error) => {
        console.log(error);
      })
    },
    execUpdate(){
      var target = this.updateRecord;
      axios.patch(API_URI + '/update', {
        'id'          : target.id,
        'date'        : target.date, 
        'startTime'   : target.startTime,
        'endTime'     : target.endTime,
        'workingTime' : target.workingTime,
      }).then((response) =>{ 
        console.log(`Update succeeded in Vue.js : ${response.data}`);
        //再表示
        this.select();
        this.transPage('list');
      }).catch((error) => {
        console.log(error);
      })
    },
    execDelete(){
      var target = this.updateRecord;
      //TODO 削除処理はPOSTリクエストでいいのか?
      axios.post(API_URI + '/delete', {
        'id' : target.id,
      }).then((response) =>{ 
        console.log(`Delete succeeded in Vue.js : ${response.data}`);
        //再表示
        this.select();
        this.transPage('list');
      }).catch((error) => {
        console.log(error);
      })
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
