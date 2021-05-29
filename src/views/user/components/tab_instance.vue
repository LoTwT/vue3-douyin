<template>
  <div class="videos">
    <div class="video-item">
      <img src="/src/assets/imgs/video-cover.png" alt="" />
    </div>
    <div class="video-item">
      <img src="/src/assets/imgs/video-cover.png" alt="" />
    </div>
    <div class="video-item">
      <img src="/src/assets/imgs/video-cover.png" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>

<style scoped>
.videos {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
}
.videos .video-item {
  width: 248rem;
  height: 330rem;
}
.videos img {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
