<template>
  <div class="user">
    <user-header v-if="userInfo" :userInfo="userInfo" />
    <user-info v-if="userInfo" :userInfo="userInfo" />
    <tab-switch :userId="id" />
  </div>
</template>

<script lang="ts">
import "../../assets/css/user.css";
import axios from "../../axios";

import userHeader from "./components/header.vue";
import userInfo from "./components/info.vue";
import tabSwitch from "./components/tab_switch.vue";

import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  components: {
    userHeader,
    userInfo,
    tabSwitch,
  },
  setup() {
    const { id } = useRouter().currentRoute.value.params;
    const userInfo = ref(null);

    axios(`/user/${id}`).then((res) => (userInfo.value = res.data));

    return {
      userInfo,
      id,
    };
  },
});
</script>