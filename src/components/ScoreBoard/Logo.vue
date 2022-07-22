<template>
  <h1 class="logo">
    시간
    <span class="time-cost">{{ timeCost }} s</span>
  </h1>

</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { GameStoreKey } from '@/stores'
import { IStatus } from '@/IType'

// export default defineComponent({
//   name: 'Logo',
// })

export default defineComponent({
  setup: () => {
    const { state, commit } = useStore(GameStoreKey)
    return {
      IStatus,
      status: computed(() => state.status),
      timeCost: computed(() => state.timeCost),
      reset: () => commit('reset'),
      showCardsA: () => commit('startA'),
      showCardsB: () => commit('startB')
    }
  }
})
</script>

<style scoped>
.logo {
  width: 160px;
  height: 100px;
  line-height: 90px;
  padding: 5px;
  border-radius: 5px;
  background-color: #5979ac;
  color: #fff;
  text-align: center;
}
a {
  text-decoration: none;
  color: #fff;
}

@media screen and (max-width: 450px) {
  .logo {
    width: 150px;
  }
}

@media screen and (max-width: 380px) {
  .logo {
    width: 140px;
  }
}

@media screen and (max-width: 360px) {
  .logo {
    width: 110px;
  }
  a {
    font-size: 18px;
  }
}
</style>
