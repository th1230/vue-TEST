<template>
  <div class="radioType" :class="currentTheme">
    <div
      v-for="(r, index) in radios"
      :key="r.radioID"
      class="group"
      :class="currentTheme"
      @click="radioToggleCheck(index)"
    >
      <input
        :id="r.radioID"
        type="radio"
        name="part"
        :ref="(el) => (r.radioRef = el)"
      />
      <span class="radio-btn" :class="currentTheme"></span>
      <label :for="r.radioID">{{ r.labelText }}</label>
    </div>
  </div>
</template>

<script>
import { store } from "../vuex/store";
import { reactive } from "vue";

export default {
  props: ["mindcb"],
  setup({ mindcb }) {
    let currentTheme = store.getters.getCurrentTheme;

    let radios = reactive([
      { radioID: "r1", radioRef: null, labelText: "平靜" },
      { radioID: "r2", radioRef: null, labelText: "羨慕" },
      { radioID: "r3", radioRef: null, labelText: "害羞" },
      { radioID: "r4", radioRef: null, labelText: "驕傲" },
    ]);

    let radioToggleCheck = (index) => {
      radios[index].radioRef.checked = true;

      mindcb(radios[index].labelText);
    };

    return { radios, radioToggleCheck, currentTheme };
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/scss/share.scss";
.radioType {
  display: flex;
  justify-content: space-around;
  align-items: center;
  .group {
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;

    @media screen and (max-width: 576px) {
      padding: 0.1rem 0.5rem;
    }

    @media screen and (max-width: 450px) {
      flex-direction: column;
      align-items: center;

      label {
        margin: 0 !important;
      }
    }

    label {
      margin-left: 0.5rem;
      font-weight: 600;
    }
    input[type="radio"] {
      opacity: 0;
      position: relative;
      z-index: 100;
      margin: 0;
      width: 1.2rem;
      height: 1.2rem;
    }
    .radio-btn {
      width: 1.2rem;
      height: 1.2rem;
      clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
      cursor: pointer;
      position: absolute;

      &::after {
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 0.7rem;
        height: 0.7rem;
        clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
        opacity: 0;
      }
    }
  }
}
</style>
