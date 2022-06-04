<template>
  <div class="listPage container">
    <ListComponent />
  </div>
</template>

<script>
import ListComponent from "../components/ListComponent.vue";
export default {
  components: { ListComponent },
};
</script>

<style lang="scss" scoped>
@use "../assets/scss/layout.scss";
</style>
