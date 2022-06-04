<template>
  <div class="listItem" :class="currentTheme">
    <h1 class="title">{{ title }}</h1>
    <div class="dataGroup">
      <p class="area">區域:{{ itemdata.sarea }}</p>
      <p class="total">當前bike總數:{{ itemdata.tot }}</p>
      <p>更新日期:{{ itemdata.updateTime }}</p>
    </div>
  </div>
</template>

<script>
import { store } from "../vuex/store";
import { computed } from "@vue/runtime-core";
export default {
  props: ["data"],
  setup(props) {
    let itemdata = props.data;
    let currentTheme = store.getters.getCurrentTheme;

    let title = computed(() => {
      return itemdata.sna.split("_")[1];
    });

    return { itemdata, title, currentTheme };
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/scss/share.scss";
.listItem {
  padding: 2rem;
  border-radius: 2rem;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;

  @media screen and (max-width: 768px) {
    .dataGroup {
      flex-direction: column;
    }
  }

  h1 {
    width: 60%;
    margin: 0 auto;
    text-align: center;
    color: white;
    margin-bottom: 1rem;
  }
  .dataGroup {
    display: flex;
    justify-content: space-around;
    color: white;
    font-weight: 600;
    font-size: 1.2rem;
    align-items: center;
    border-radius: 2rem;
    margin-bottom: 1rem;
  }
}
</style>
