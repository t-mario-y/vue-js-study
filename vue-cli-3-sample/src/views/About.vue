<template>
  <div class="about">
    <h1>Bulmaの素振り</h1>
    <HelloBulma msg="hoge"/>
  </div>
</template>

<script>
import HelloBulma from '@/components/HelloBulma.vue'
export default {
  name: 'about',
  components: {
    HelloBulma
  }
}
</script>
