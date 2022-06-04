<template>
  <div class="list">
    <div class="controlbtns">
      <button
        class="normalbtn"
        :class="currentTheme"
        @click="sendAjaxRequest()"
      >
        獲取Youbike數據
      </button>
      <button
        class="normalbtn"
        :class="currentTheme"
        @click="delaySortBike('升序')"
      >
        bike升序排序
      </button>
      <button
        class="normalbtn"
        :class="currentTheme"
        @click="delaySortBike('降序')"
      >
        bike降序排序
      </button>
    </div>
    <template v-if="youbikeData.items.length > 0">
      <ListItem
        v-for="item in youbikeData.items"
        :key="item.sno"
        :data="item"
      />
    </template>
  </div>
</template>

<script>
import axios from "axios";
import { store } from "../vuex/store";
import { reactive } from "@vue/reactivity";
import ListItem from "./ListItem.vue";

export default {
  components: {
    ListItem,
  },
  setup() {
    let youbikeData = reactive({ items: [] });
    let currentTheme = store.getters.getCurrentTheme;

    function sendAjaxRequest() {
      axios
        .get("https://mocki.io/v1/a6c9da5c-ef42-4cc1-b32b-24614f90be49")
        .then((d) => {
          youbikeData.items = reactive(d.data);
        });
    }

    function sortBike(type) {
      if (type == "升序") {
        youbikeData.items.sort((it1, it2) => {
          return it1.tot - it2.tot;
        });
      }

      if (type == "降序") {
        youbikeData.items.sort((it1, it2) => {
          return it2.tot - it1.tot;
        });
      }

      return [];
    }

    function delay(func, delay) {
      let timer;
      return function (...rest) {
        if (!timer) {
          func(...rest);
          timer = setTimeout(() => {
            clearTimeout(timer);
            timer = null;
          }, delay);
        }
      };
    }

    let delaySortBike = delay(sortBike, 800);

    return {
      sendAjaxRequest,
      delaySortBike,
      youbikeData,
      currentTheme,
    };
  },
};
</script>

<style lang="scss" scoped>
.list {
  .controlbtns {
    display: flex;
    justify-content: space-around;
    margin-bottom: 2rem;
    padding: 1.5rem 0;
    border-bottom: 10px solid rgba(91, 91, 91, 0.568);

    @media screen and (max-width: 768px) {
      flex-direction: column;
      .normalbtn {
        margin-bottom: 1rem;
      }
    }
    .normalbtn {
      padding: 1rem 2rem;
      font-size: 1.2rem;
      cursor: pointer;
      font-weight: 700;
      border-radius: 2px;
      transition: 0.2s;
      border: none;
      &:active {
        transform: scale(0.9);
      }
    }
  }
}
</style>
