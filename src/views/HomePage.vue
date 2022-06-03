<template>
  <div class="home container">
    <InputComponent />
  </div>
</template>

<script>
import InputComponent from "../components/InputComponent.vue";

export default {
  name: "HomeView",
  components: { InputComponent },
};
</script>

<style lang="scss" scoped>
@use "../assets/scss/layout.scss";

.home {
  box-sizing: border-box;
  border-radius: 0.75rem;
  padding: 1rem 2rem;
}
</style>
