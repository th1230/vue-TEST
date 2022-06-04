<template>
  <div class="selectType" :class="currentTheme">
    <select name="mind" v-model="currentMind" id="mind">
      <option value="0">開心</option>
      <option value="1">生氣</option>
      <option value="2">悲伤</option>
      <option value="3">害怕</option>
      <option value="4">驚訝</option>
      <span class="dropdownbtn"></span>
    </select>

    <img v-if="mind" :src="mindImg()" alt="" />
  </div>
</template>

<script>
import { store } from "../vuex/store";
import { ref } from "vue";
export default {
  props: ["mindcb"],
  setup({ mindcb }) {
    let currentTheme = store.getters.getCurrentTheme;

    let mind = [
      {
        picName: "happy.png",
        ch: "開心",
      },
      {
        picName: "angry.png",
        ch: "生氣",
      },
      {
        picName: "sad.png",
        ch: "悲伤",
      },
      {
        picName: "fear.png",
        ch: "害怕",
      },
      {
        picName: "surprise.png",
        ch: "驚訝",
      },
    ];

    let currentMind = ref(0);

    const mindImg = () => {
      mindcb(mind[currentMind.value].ch);
      return require(`@/assets/picture/${mind[currentMind.value].picName}`);
    };

    return { currentMind, currentTheme, mindImg, mind };
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/scss/share.scss";
.selectType {
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 576px) {
    flex-direction: column;
    select {
      margin-bottom: 1rem;
      width: 100% !important;
    }
  }

  select {
    width: 70%;
    padding: 10px;
    font-size: 1.2rem;
    outline: none;
    border: none;
    cursor: pointer;
    appearance: none;
    position: relative;
    color: white;
    font-weight: 600;
  }

  img {
    display: inline-block;
    width: 100px;
    transform-style: preserve-3d;
    backface-visibility: visible;
    perspective: 200px;
    cursor: pointer;

    &:hover {
      animation: rotate 3s ease infinite alternate;
    }
  }

  @keyframes rotate {
    0% {
      transform: rotateY(0deg);
    }

    100% {
      transform: rotateY(720deg);
    }
  }
}
</style>
