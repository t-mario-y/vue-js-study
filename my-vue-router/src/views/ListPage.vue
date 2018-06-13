<script>
export default {
  name: 'ListPage',
  props:['dataList','childHoge'],
  methods : {
  },
}
</script>
<template>
  <div class="listPage">
    <h1>一覧ページ</h1>
    <div>{{dataList}}</div>
    <div>{{childHoge}}</div>
    <button v-on:click="$emit('childFetch')">検索</button>
  </div>
</template>