<script setup>
import LifePattern from './Life-pattern.vue'

const props = defineProps({
  toggleLexicon: Function,
})

const pattern1 = [
  [false, true, false], [true, false, false], [true, true, true],
  [false, false, false], [false, false, false],
  [false, true, true], [true, false, true], [false, false, true]
]
const pattern2 = [

]

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
        <LifePattern :grid="pattern1" @click="applyPattern(pattern1)"/>
        <LifePattern :grid="pattern1"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "life-lexicon.css";
</style>