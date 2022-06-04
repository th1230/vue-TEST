<template>
  <nav class="nav" :class="[currentTheme]">
    <div class="navLink">
      <h1>小試身手</h1>
      <div class="routes">
        <router-link
          to="/home"
          data-longName="HOME"
          data-shortName="H"
        ></router-link>
        <router-link
          to="/list"
          data-longName="LIST"
          data-shortName="L"
        ></router-link>
      </div>
    </div>

    <div class="changeColorBtns">
      <button
        class="btn"
        :class="color"
        v-for="color in colorList"
        :key="color"
        @click="changeTheme(color)"
      ></button>
    </div>
  </nav>
  <router-view></router-view>
</template>

<script>
import { store } from "./vuex/store";

export default {
  setup() {
    const colorList = store.getters.getColorList;
    let currentTheme = store.getters.getCurrentTheme;

    const changeTheme = (color) => {
      store.commit("changeTheme", color);
    };

    return {
      changeTheme,
      currentTheme,
      colorList,
    };
  },
};
</script>

<style lang="scss">
@use "./assets/scss/share.scss";

html,
body {
  padding: 0;
  margin: 0;
  font-size: 16px;
}

.nav {
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  box-sizing: border-box;

  @media screen and (max-width: 576px) {
    flex-direction: column;
    align-items: center;
    .navLink {
      margin-bottom: 1rem;
      flex-direction: column;
      h1 {
        font-size: 3rem !important;
        margin-bottom: 1rem !important;
      }
    }
  }
  .navLink {
    display: flex;
    align-items: center;
    h1 {
      color: white;
      text-decoration: none;
      font-size: 1.75rem;
      font-weight: 600;
      padding: 0;
      margin: 0;
    }
    .routes {
      display: flex;
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        width: 2rem;
        height: 2rem;
        text-decoration: none;
        color: white;
        border: 3px solid white;
        font-size: 1.25rem;
        margin-left: 0.5rem;
        text-overflow: ellipsis;
        overflow: hidden;
        transition: 0.5s;

        &::after {
          content: attr(data-longName);
          display: none;
        }

        &::before {
          content: attr(data-shortName);
          display: inline-block;
        }

        &:hover {
          border-radius: 10px;
          width: 7rem;
          border-radius: 10px;
          &:hover::after {
            display: inline-block;
          }

          &:hover::before {
            display: none;
          }
        }
      }
    }
  }

  .changeColorBtns {
    display: flex;
    .btn {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      margin-right: 0.5rem;
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
</style>
