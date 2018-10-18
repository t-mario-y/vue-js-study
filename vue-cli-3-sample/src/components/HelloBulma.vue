<template>
  <div class="bulma">
    <p>this is in HelloBulma</p>
    <a href="#" class="button">HELLO!</a>
  </div>
</template>
<script>
export default {
  name:'HelloBulma',
  props: {
    msg: String
  }
}
</script>
<style lang="scss" scoped>
@import "./node_modules/bulma/bulma.sass";
</style>

