<template>
  <div class="dialog">
    <div class="dialogCard" :class="currentTheme">
      <h1>當前輸入的是:</h1>
      <p>{{ mind }}</p>

      <button class="confirmbtn" @click="close()">確認</button>
    </div>
  </div>
</template>

<script>
import { store } from "../vuex/store.js";
export default {
  emits: ["close"],
  props: ["value"],
  setup(props, content) {
    let currentTheme = store.getters.getCurrentTheme;

    let mind = props.value;

    let close = () => {
      content.emit("close");
    };
    return { currentTheme, close, mind };
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/scss/share.scss";
.dialog {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(70, 68, 68, 0.485);
  width: 100vw;
  height: 100vh;

  .dialogCard {
    position: absolute;
    width: 80%;
    left: 50%;
    top: 50%;
    padding: 2rem 1rem;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    padding: 5% 10%;

    @media screen and (max-width: 1024px) {
      h1 {
        font-size: 2rem !important;
      }
      p {
        font-size: 1.75rem !important;
      }

      .confirmbtn {
        font-size: 3rem !important;
        width: 9rem !important;
        height: 4.5rem !important;
      }
    }

    @media screen and (max-width: 768px) {
      h1 {
        font-size: 1.75rem !important;
      }
      p {
        font-size: 1.3rem !important;
      }

      .confirmbtn {
        font-size: 1.75rem !important;
        width: 8rem !important;
        height: 4rem !important;
      }
    }

    @media screen and (max-width: 576px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h1 {
        font-size: 2rem !important;
        margin: 0 !important;
        margin-bottom: 1rem;
      }
      p {
        font-size: 2rem !important;
        margin: 0 !important;
      }

      .confirmbtn {
        font-size: 2rem !important;
        width: 5rem !important;
        height: 4rem !important;
        margin: 0 !important;
      }
    }

    h1 {
      font-size: 3rem;
      margin-right: 1rem;
    }
    p {
      margin-right: 3rem;
      font-size: 4rem;
    }

    .confirmbtn {
      margin-left: auto;
      width: 10rem;
      height: 5rem;
      font-size: 4rem;
      border: none;
      cursor: pointer;
      background-color: rgba(0, 0, 0, 0);
      color: white;
    }
  }
}
</style>
