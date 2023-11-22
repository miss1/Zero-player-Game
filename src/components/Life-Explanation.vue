<script setup>

defineProps({
  toggleExplanation: Function,
})

</script>

<template>
  <div class="mask">
    <div class="dialog">
      <div class="head">
        <h3>Game of Life Explanation</h3>
        <button @click="toggleExplanation">Close</button>
      </div>
      <div class="content">
        <p class="intro">The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970.</p>
        <p>Rules</p>
        <ul>
          <li>Any live cell with fewer than two live neighbours dies, as if by underpopulation.</li>
          <li>Any live cell with two or three live neighbours lives on to the next generation.</li>
          <li>Any live cell with more than three live neighbours dies, as if by overpopulation.</li>
          <li>Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction</li>
        </ul>
      </div>
      <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" target="_blank">More</a>
    </div>
  </div>
</template>

<style scoped>
@import "life-explanation.css";
</style>