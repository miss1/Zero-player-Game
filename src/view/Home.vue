<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function goto(link) {
  router.push(link)
}
</script>

<template>
  <h2>Zero-player game</h2>
  <button class="btn-select" @click="goto('/life')">Conway's Game of Life</button>
  <button class="btn-select" @click="goto('/ant')">Langton's ant</button>
</template>

<style scoped>
.btn-select {
  display: block;
  margin: 10px auto;
}
/*@import './index.scss';*/
</style>
