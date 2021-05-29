<template>
  <div class="user">
    <user-header />
    <user-info />
    <tab-switch />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import "../../assets/css/user.css";

import userHeader from "./components/header.vue";
import userInfo from "./components/info.vue";
import tabSwitch from "./components/tab_switch.vue";

export default defineComponent({
  components: {
    userHeader,
    userInfo,
    tabSwitch,
  },
  setup() {},
});
</script>