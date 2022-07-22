<template>
  <div class="container" @click="doFlip">
    <div class="card" :class="{ flipped: card.flipped }">
      <img v-if="card.name === 'way'" class="front" src="../../assets/way.png" />
      <img v-if="card.name === 'gate'" class="front" src="../../assets/gate.png" />
      <img v-if="card.name === 'light'" class="front" src="../../assets/light.png" />
      <img v-if="card.name === 'bread'" class="front" src="../../assets/bread.png" />
      <img v-if="card.name === 'shepherd'" class="front" src="../../assets/shepherd.png" />
      <img v-if="card.name === 'truth'" class="front" src="../../assets/truth.png" />
      <img v-if="card.name === 'resurrection'" class="front" src="../../assets/resurrection.png" />
      <img v-if="card.name === 'jesus'" class="front" src="../../assets/jesus.png" />
      <img v-if="card.name === 'sheep'" class="front" src="../../assets/sheep.png" />
      <img v-if="card.name === 'bible'" class="front" src="../../assets/bible.png" />
      <img v-if="card.name === 'vine'" class="front" src="../../assets/vine.png" />
      <img v-if="card.name === 'haven'" class="front" src="../../assets/haven.png" />
      <img v-if="card.name === 'sky'" class="front" src="../../assets/sky.png" />
      <img v-if="card.name === 'donkey'" class="front" src="../../assets/donkey.png" />
      <img v-if="card.name === 'heal'" class="front" src="../../assets/heal.png" />
      <img v-if="card.name === 'fruit'" class="front" src="../../assets/fruit.png" />

      <img class="back" src='../../assets/back.png' />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, PropType } from 'vue'
import { useStore } from 'vuex'
import { ICard } from '@/IType'
import { GameStoreKey } from '@/stores'

export default defineComponent({
  name: 'Card',
  props: {
    card: {
      type: Object as PropType<ICard>,
      required: true
    }
  },
  emits: {
    onFlip: (payload: ICard) => {
      return !!payload
    }
  },
  setup: (props, context) => {
    const { card } = toRefs(props)
    const { commit } = useStore(GameStoreKey)

    const doFlip = (e: MouseEvent) => {
      if (card.value.flipped) {
        return
      }
      commit('flips', [card.value])
      context.emit('onFlip', card.value)
    }

    return {
      card,
      doFlip
    }
  }
})
</script>

<style scoped>
.container {
  width: 100px;
  height: 121px;
  margin-right: 3px;
  cursor: pointer;
  position: relative;
  perspective: 800px;
}

.card {
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
}

.card.flipped {
  transform: rotateY(180deg);
}

.card img {
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  backface-visibility: hidden;
}

.card .back {
  background: blue;
  transform: rotateY(0deg);
}

.card .front {
  background: blue;
  transform: rotateY(180deg);
}

@media screen and (max-width: 450px) {
  .container {
    width: 92px;
    height: 111px;
    margin-right: 1px;
  }
}

@media screen and (max-width: 380px) {
  .container {
    width: 85px;
    height: 102px;
    margin-right: 1px;
  }
}

@media screen and (max-width: 360px) {
  .container {
    width: 70px;
    height: 84px;
    margin-right: 1px;
  }
}
</style>
