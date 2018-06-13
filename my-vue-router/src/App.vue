<template>
  <div id="app">
    <nav>
      <router-link to="/">一覧</router-link>
      <router-link to="/update">更新</router-link>
    </nav>
    <router-view 
      v-bind:dataList="dataList" 
      v-bind:updateRecord="updateRecord" 
      v-bind:childHoge="hoge"
      v-on:childFetch="fetch" />
  </div>
</template>
<script>
import axios from 'axios';
const API_URI = 'https://work-time-log-api.herokuapp.com/workTimeLog';
export default {
  name: "App",
  data: function() {
    return {
      dataList: [],
      updateRecord: {
        id: "12345",
        name: "柳田格之進"
      },
      hoge: "hogehoge",
    };
  },
  methods: {
    fetch(){
      axios.get(API_URI + '/select')
        .then((response) => {
          this.dataList = response.data;
          console.log(`Fetch succeeded in Vue.js.`);
        }).catch((error) => {
          console.log(error);
        })
    }
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
