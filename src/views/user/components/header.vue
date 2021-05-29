<template>
  <div class="header">
    <img src="/src/assets/imgs/header-cover.jpg" alt="" />
    <router-link class="icon icon-left" :to="{ name: 'video' }"></router-link>
    <router-link class="icon icon-menu" :to="{}"></router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>
