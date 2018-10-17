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
    <ul>
      <li v-for="data in dataList" :key="data.id">
        <span>{{data.date}}</span>
        <span>{{data.startTime}} ~ {{data.endTime}}</span>
        <span>{{data.workingTime/3600}} h</span>
      </li>
    </ul>
    <div>{{childHoge}}</div>
    <button v-on:click="$emit('select')">検索</button>
  </div>
</template>