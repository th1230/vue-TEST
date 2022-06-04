<template>
  <div class="error">
    <img src="../assets/picture/error.png" alt="error" />
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    let title = ref("當前的頁面找不到...404");
    let count = ref(5);
    let timer = "";
    let router = useRouter();

    onMounted(() => {
      title.value = `倒數${count.value}秒後自動返回Home頁面`;
      timer = setInterval(() => {
        count.value--;
        title.value = `倒數${count.value}秒後自動返回Home頁面`;
        if (count.value == 0) {
          clearInterval(timer);
          router.push("/home");
        }
      }, 1000);
    });

    onBeforeUnmount(() => {
      clearInterval(timer);
    });
    return { title };
  },
};
</script>

<style lang="scss" scoped>
.error {
  width: 100%;
  height: 100vh;
  display: flex;
  padding: 2rem 3rem;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    object-fit: container;
    width: 90vw;
    height: 90vw;
    max-width: 400px;
    max-height: 400px;
  }

  h1 {
    font-size: 4rem;
    text-align: center;
    @media screen and (max-width: 1024px) {
      font-size: 3rem !important;
    }
    @media screen and (max-width: 768px) {
      font-size: 2rem !important;
    }
    @media screen and (max-width: 576px) {
      font-size: 1.5rem !important;
    }
  }
}
</style>
