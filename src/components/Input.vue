<template>
  <div class="inputType">
    <label for="name">你的心情:</label>
    <input
      type="text"
      placeholder="請填入你現在的心情"
      v-model="yourFeel"
      class="text"
      :class="currentTheme"
    />
  </div>
</template>

<script>
import { store } from "../vuex/store";
import { ref, watch } from "vue";
export default {
  props: ["mindcb"],
  setup({ mindcb }) {
    const yourFeel = ref("");

    let currentTheme = store.getters.getCurrentTheme;

    watch(yourFeel, (nw) => {
      console.log(yourFeel);
      mindcb(yourFeel.value);
    });

    return { yourFeel, currentTheme };
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/scss/share.scss";

.inputType {
  label {
    display: inline-block;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    font-weight: 600;
    vertical-align: text-top;
  }
  input[type="text"].text {
    width: 100%;
    border-radius: 5px;
    border: none;
    padding: 0.75rem 1.5rem;
    box-sizing: border-box;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    outline: none;
    font-weight: 600;
  }
}
</style>
