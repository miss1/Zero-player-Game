<script setup>

defineProps({
  grid: Object,
})

</script>

<template>
  <div class="pattern">
    <span>{{grid.name}}</span>
    <table>
      <tr v-for="row in grid.pattern">
        <td v-for="col in row" :class="[col ? 'live' : 'dead']"></td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
@import "life-pattern.css";
</style>