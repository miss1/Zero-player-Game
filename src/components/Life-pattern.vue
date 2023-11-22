<script setup>

defineProps({
  grid: Array,
})

</script>

<template>
  <div class="pattern">
    <table>
      <tr v-for="row in grid">
        <td v-for="col in row" :class="[col ? 'live' : 'dead']"></td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
@import "life-pattern.css";
</style>