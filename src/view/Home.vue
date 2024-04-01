<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function goto(link) {
  router.push(link)
}
</script>

<template>
  <div class="home">
    <h2>Zero-player game</h2>
    <button class="btn-select" @click="goto('/life')">Conway's Game of Life</button>
    <button class="btn-select" @click="goto('/ant')">Langton's ant</button>
  </div>
</template>

<style scoped>
@import './Home.css';
</style>
