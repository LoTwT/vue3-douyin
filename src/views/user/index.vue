<template>
  <div class="user">
    <user-header v-if="userInfo" :userInfo="userInfo" />
    <user-info v-if="userInfo" :userInfo="userInfo" />
    <tab-switch :userId="id" :tabs="tabs" v-model:curr="currTab">
      <tab-instance :userId="id" v-if="currTab === 0" />
      <span v-else>{{ tabs[currTab].title }}</span>
    </tab-switch>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

import axios from "../../axios";

import userHeader from "./components/header.vue";
import userInfo from "./components/info.vue";
import tabSwitch from "./components/tab_switch.vue";
import tabInstance from "./components/tab_instance.vue";

export default defineComponent({
  components: {
    userHeader,
    userInfo,
    tabSwitch,
    tabInstance,
  },
  setup() {
    const { id } = useRouter().currentRoute.value.params;
    const userInfo = ref(null);

    axios(`/user/${id}`).then((res) => (userInfo.value = res.data));

    const tabs = [
      { title: "作品", value: 3384 },
      { title: "动态", value: 3384 },
      { title: "喜欢", value: 65536 },
    ];
    const currTab = ref(0);

    return {
      userInfo,
      id,
      tabs,
      currTab,
    };
  },
});
</script>

<style scoped>
.user {
  min-height: 100vh;
  background: #161822;
}
</style>