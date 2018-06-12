<script>
export default {
  name: 'ListPage',
  props:['dataList','hoge'],
  methods : {
    fuga:function(){
      console.log("asdf");
    }
  },
}
</script>
<template>
  <div class="listPage">
    <h1>一覧ページ</h1>
    <div>{{dataList}}</div>
    <div>{{hoge}}</div>
    <!-- TODO events upが実装できない-->
    <button v-on:click="fuga">fetch</button>
  </div>
</template>