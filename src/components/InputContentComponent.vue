<template>
  <Input v-show="type == 'input'" :mindcb="mindCallback" />
  <Radio v-show="type == 'radio'" :mindcb="mindCallback" />
  <Select v-show="type == 'select'" :mindcb="mindCallback" />

  <button class="showbtn" @click="showAlert">Show</button>
  <Alert @close="closeAlert" :value="mind" v-if="isClose == true" />
</template>

<script>
import Input from "./Input.vue";
import Radio from "./Radio.vue";
import Select from "./Select.vue";
import Alert from "./Alert.vue";

import { ref } from "vue";

export default {
  components: {
    Input,
    Radio,
    Select,
    Alert,
  },
  props: ["type"],
  setup() {
    let mind = ref("");
    let isClose = ref(false);

    let closeAlert = () => {
      isClose.value = false;
    };

    let showAlert = () => {
      isClose.value = true;
    };

    let mindCallback = (m) => {
      console.log(123123, m);
      mind.value = m;
    };

    return { isClose, closeAlert, showAlert, mind, mindCallback };
  },
};
</script>

<style lang="scss" scoped>
.showbtn {
  background-color: rgba(255, 255, 255, 0.648);
  border: none;

  width: 5rem;
  border-radius: 5px;
  height: 3rem;
  color: rgb(70, 70, 70);
  font-size: 1.25rem;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    width: 10rem;
    height: 3rem;
  }
}
</style>
