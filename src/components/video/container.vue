<template>
  <div class="video-container">
    <video
      :src="props.src"
      style="top: 0"
      loop
      playsinline
      muted
    ></video>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["src"],
  setup(props, context) {
    return { props };
  },
});
</script>
