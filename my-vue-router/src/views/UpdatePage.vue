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
    <h1>更新ページ</h1>
    <!--TODO さすがに見た目が悪い-->
    <div>{{record}}</div>
    <div>{{childHoge}}</div>
  </div>
</template>