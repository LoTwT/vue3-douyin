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

<style scoped>
.header {
  height: 250rem;
  position: relative;
}
.header img {
  display: block;
  width: 100%;
  height: 250rem;
}
.header .icon {
  width: 64rem;
  height: 64rem;
  position: absolute;
  top: 52rem;

  background: rgba(0, 0, 0, 0.6) center no-repeat;
  background-size: 60%;
  border-radius: 50%;
}

.header .icon-left {
  left: 32rem;
  background-image: url(../../../assets/imgs/icon-arrow-left.png);
}
.header .icon-menu {
  right: 32rem;
  background-image: url(../../../assets/imgs/icon-menu.png);
}
</style>