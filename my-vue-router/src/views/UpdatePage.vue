<script>
export default {
  name: 'UpdatePage',
  props:['record','childHoge'],
  methods : {
  },
}
</script>
<template>
  <div class="update">
    <h1>更新画面</h1>
    <div>{{record}}</div>
    <div>{{childHoge}}</div>
  </div>
</template>