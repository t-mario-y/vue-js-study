<script>
export default {
  name: 'UpdatePage',
  props:['updateRecord','hoge'],
  methods : {
  },
}
</script>
<template>
  <div class="update">
    <h1>更新画面</h1>
    <div>{{updateRecord}}</div>
    <div>{{hoge}}</div>
  </div>
</template>