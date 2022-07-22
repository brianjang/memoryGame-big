<template>
  <div class="score-board">
<!--    <Logo />-->
    <Progress />
    <Score />
    <TextView />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Logo from './Logo.vue'
import Progress from './Progress.vue'
import Score from './Score.vue'
import TextView from '@/components/ScoreBoard/text.vue'

export default defineComponent({
  name: 'ScoreBoard',
  components: {
    TextView,
    Logo,
    Progress,
    Score
  }
})
</script>

<style scoped>
.score-board {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
