<template>
  <div class="video-container">
    <video
      ref="videoTag"
      :src="props.src"
      style="top: 0"
      autoplay
      loop
      playsinline
      muted
    ></video>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  props: ["src"],
  setup(props) {
    const videoTag = ref<any | null>(null);

    onMounted(() => {
      const videoElement = videoTag.value;
      videoElement &&
        videoElement.addEventListener("canplay", () => {
          // 视频高度
          const videoHeight: number = videoElement.offsetHeight;
          // 屏幕高度
          const screenHeight: number = document.documentElement.clientHeight;
          // 使视频上下居中
          videoElement.style.top = (screenHeight - videoHeight) / 2 + "px";
          // 防止 autoplay 在网速过慢时失效
          videoElement.play();
        });
    });

    return { props, videoTag };
  },
});
</script>
