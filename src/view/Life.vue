<script setup>
import {ref, onMounted, onUnmounted} from "vue"
import Header from '../components/Header.vue'
import LifeExplanation from '../components/Life-Explanation.vue'
import LifeLexicon from '../components/Life-Lexicon.vue'

const grid_width = 100
const grid_height = 100

const data = ref()
const gameRunning = ref(false)
const speed = ref(1)
const showExplanation = ref(false)
const showLexicon = ref(false)

let duration = 1000
let intervalID

let currentPattern = []

onMounted(() => {
  initializeData()
});

// initialize grid
function initializeData() {
  data.value = new Array(grid_height).fill(false).map(() => new Array(grid_width).fill(false))
}

// Manual Life State Toggling
function toggleState(i, j) {
  if (gameRunning.value) return
  data.value[i][j] = !data.value[i][j]
}

// speed
function updateSpeed() {
  if (speed.value < 4) speed.value++
  else speed.value = 1
  duration = Math.floor(1000 / speed.value)
  if (intervalID) {
    clearInterval(intervalID)
    intervalID = setInterval(updateGameData, duration)
  }
}

// start/stop
function toggleGame() {
  gameRunning.value = !gameRunning.value
  if (!intervalID) {
    intervalID = setInterval(updateGameData, duration)
  } else {
    clearInterval(intervalID)
    intervalID = null
  }
}

// reset game
function resetGrid() {
  gameRunning.value = false
  if (intervalID) clearInterval(intervalID)
  intervalID = null
  applyPattern()
  speed.value = 1
  duration = 1000
}

// update
function updateGameData() {
  const neighbors = [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]]
  const changeData = []
  for (let i = 0; i < grid_height; i++) {
    for (let j = 0; j < grid_width; j++) {
      let liveCell = 0
      for (let n of neighbors) {
        let n_row = i + n[0], n_col = j + n[1]
        if (n_row < 0 || n_row >= grid_height || n_col < 0 || n_col >= grid_width) continue
        if (data.value[n_row][n_col]) liveCell++
      }
      if ((data.value[i][j] && liveCell !== 2 && liveCell !== 3) || (!data.value[i][j] && liveCell === 3))
        changeData.push([i, j])
    }
  }
  for (const [row, col] of changeData) data.value[row][col] = !data.value[row][col]
}

function toggleExplanation() {
  showExplanation.value = !showExplanation.value
}

function toggleLexicon() {
  showLexicon.value = !showLexicon.value
}

function applyPattern(pattern) {
  if (pattern) currentPattern = pattern
  initializeData()
  for (let i = 0; i < currentPattern.length; i++) {
    for (let j = 0; j < currentPattern[0].length; j++) {
      data.value[i + 10][j + 20] = currentPattern[i][j]
    }
  }
}

onUnmounted(() => {
  gameRunning.value = false
  if (intervalID) clearInterval(intervalID)
});

</script>

<template>
  <div class="life">
    <Header title="Conway's Game of Life"/>
    <div class="life-grid">
      <table>
        <tr v-for="(row, i) in data">
          <td v-for="(col, j) in row" :class="[col ? 'live' : 'dead']" @click="toggleState(i, j)"></td>
        </tr>
      </table>
    </div>
    <div class="life-action">
      <button @click="toggleExplanation">Explanation</button>
      <button :class="{'disabled': gameRunning}" @click="toggleLexicon">Lexicon</button>
      <button @click="toggleGame">{{gameRunning ? 'Stop' : 'Start'}}</button>
      <button :class="{'disabled': gameRunning}" @click="updateGameData">Next Step</button>
      <button :class="{'disabled': gameRunning}" @click="resetGrid">Reset</button>
      <button @click="updateSpeed">Speed: {{speed}}x</button>
    </div>
  </div>
  <LifeExplanation v-show="showExplanation" :toggle-explanation="toggleExplanation"/>
  <LifeLexicon v-show="showLexicon" :toggle-lexicon="toggleLexicon" @applyPattern="applyPattern"/>
</template>

<style scoped>
@import './Life.css';
</style>