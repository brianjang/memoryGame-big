<template>
  <div class="status-footer">
<!--    <span v-if="status === IStatus.READY" @click.prevent.stop="reset">Ready</span>-->
    <span v-if="status === IStatus.READY" @click.prevent.stop="resetA">ReadyA</span>
    <span v-if="status === IStatus.READY" @click.prevent.stop="resetB">ReadyB</span>
    <span v-if="status === IStatus.PLAYING">Playing</span>
    <a v-if="status === IStatus.PASSED" @click.prevent.stop="reset">Play again</a>
    <span class="time-cost">{{ timeCost }} s</span>
    <div class="button">
      <button @click="showCardsA">showA</button>
      <button @click="showCardsB">showB</button>
    </div>

  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { GameStoreKey } from '@/stores'
import { IStatus } from '@/IType'

export default defineComponent({
  setup: () => {
    const { state, commit } = useStore(GameStoreKey)
    return {
      IStatus,
      status: computed(() => state.status),
      timeCost: computed(() => state.timeCost),
      reset: () => commit('reset'),
      resetA: () => commit('resetA'),
      resetB: () => commit('resetB'),
      showCardsA: () => commit('startA'),
      showCardsB: () => commit('startB')
    }
  }
})
</script>

<style scoped>
.status-footer {
  position: relative;
  margin-top: 10px;
  width: 100%;
  height: 20px;
  line-height: 20px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
}
a {
  text-decoration: none;
  cursor: pointer;
}
.time-cost {
  position: absolute;
  right: 10px;
  font-size: 15px;
  font-weight: normal;
}
</style>
