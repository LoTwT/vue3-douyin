<template>
  <div class="video">
    <container src="/videos/f94f8ff6-92d9-4b16-a582-ac71b553c30b.mp4" />
    <top-nav />
    <bottom-nav />
    <right-asider />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "../assets/css/video.css";
import container from "../components/video/container.vue";
import topNav from "../components/video/top_nav.vue";
import bottomNav from "../components/video/bottom_nav.vue";
import rightAsider from "../components/video/right_asider.vue";

export default defineComponent({
  components: { container, topNav, bottomNav, rightAsider },
  setup() {},
});
</script>
