import { createStore } from "vuex";
import { toRef } from "vue";

const store = createStore({
  state: {
    colorList: [
      "green-theme",
      "blue-theme",
      "orange-theme",
      "purple-theme",
      "gray-theme",
      "ruby-theme",
    ],
    themeColor: "green-theme",
  },
  mutations: {
    changeTheme(state, color) {
      state.themeColor = color;
    },
  },
  getters: {
    getCurrentTheme(state) {
      return toRef(state, "themeColor");
    },
    getColorList(state) {
      return state.colorList;
    },
  },
});

export { store };
