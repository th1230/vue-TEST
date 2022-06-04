<template>
  <nav class="inputTypeSelect" :class="currentTheme">
    <h1 class="title">我是輸入頁面</h1>

    <ul class="inputTypes">
      <li
        class="inputType outlinebtn"
        :class="currentTheme"
        @click="changeType('input')"
      >
        Input
      </li>
      <li
        class="inputType outlinebtn"
        :class="currentTheme"
        @click="changeType('select')"
      >
        Select
      </li>
      <li
        class="inputType outlinebtn"
        :class="currentTheme"
        @click="changeType('radio')"
      >
        Radio
      </li>
    </ul>
  </nav>

  <main class="mainView" :class="currentTheme">
    <InputContentComponent v-bind:type="currentType" />
  </main>
</template>

<script>
import InputContentComponent from "./InputContentComponent.vue";

import { store } from "../vuex/store";
import { ref } from "vue";
export default {
  setup() {
    let currentTheme = store.getters.getCurrentTheme;

    let currentType = ref("input");

    function changeType(type) {
      currentType.value = type;
    }

    return {
      currentTheme,
      currentType,
      changeType,
    };
  },
  components: {
    InputContentComponent,
  },
};
</script>

<style lang="scss" scope>
@use "../assets/scss/share.scss";

.inputTypeSelect {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1.5rem;
  border-radius: 1rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;

    & .title {
      font-size: 2rem !important;
    }

    & .inputTypes {
      width: 100%;
      justify-content: space-evenly;
      padding: 0;
    }
  }

  @media screen and (max-width: 576px) {
    & .inputTypes {
      flex-direction: column;
      .inputType {
        margin-bottom: 1rem;
      }
    }
  }

  .title {
    color: white;
    font-size: 1.3rem;
    font-weight: 600;
  }

  .inputTypes {
    list-style-type: none;
    display: flex;
    .inputType.outlinebtn {
      margin-left: 0.2rem;
      margin-right: 0.5rem;
      border-radius: 1rem;
      font-weight: 600;
      cursor: pointer;
      padding: 0.75rem 1.5rem;
      cursor: pointer;
      transition: transform 0.2s;
      &:hover {
        transform: scale(1.1);
      }

      &:active {
        transform: scale(0.9);
      }
    }
  }
}

.mainView {
  padding: 1rem 1.5rem;
  border-radius: 1rem;
}
</style>
