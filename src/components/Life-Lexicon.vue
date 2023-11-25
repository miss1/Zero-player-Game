<script setup>
import LifePattern from './Life-pattern.vue'
import {onMounted, ref} from "vue";

const props = defineProps({
  toggleLexicon: Function,
})

let patterns = []

onMounted(async () => {
  const response = await fetch('/pattern.json')
  patterns = await response.json()
})

const emits = defineEmits(['applyPattern'])

function applyPattern(pattern) {
  emits('applyPattern', pattern)
  props.toggleLexicon()
}

</script>

<template>
  <div class="mask">
    <div class="dialog">
      <div class="head">
        <h3>Life Lexicon</h3>
        <button @click="toggleLexicon">Close</button>
      </div>
      <div>
        <LifePattern v-for="pattern in patterns" :key="pattern.name" :grid="pattern" @click="applyPattern(pattern.pattern)"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "life-lexicon.css";
</style>