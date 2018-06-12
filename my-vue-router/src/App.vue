<template>
  <div id="app">
    <nav>
      <router-link to="/">一覧</router-link>
      <router-link to="/update">更新</router-link>
    </nav>
    <router-view /><!-- ここにパスと一致したコンポーネントが埋め込まれる -->
    <button v-on:click="fuga">button</button>
    <div>{{store.updateRecord.id}}</div>
    <div>{{store.updateRecord.name}}</div>
  </div>
</template>
<script>
export default {
  name: 'App',
  props: ['store'],
  methods:{
    fuga(){
      console.log(this.store.hoge);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
