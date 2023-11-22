<script setup>

defineProps({
  title: String,
})

</script>

<template>
  <div class="header">
    <h2 class="title">{{title}}</h2>
    <router-link to="/">Go to Home</router-link>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
}

.title {
  text-align: left;
  margin: 15px 0;
}
</style>
