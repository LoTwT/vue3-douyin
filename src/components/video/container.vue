<template>
  <div class="video-container">
    <video
      ref="videoTag"
      :src="getResource(src)"
      style="top: 0"
      loop
      playsinline
      muted
      @click="videoClick"
    ></video>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { getResource } from "../../utils/common";

export default defineComponent({
  props: ["src"],
  setup() {
    const videoTag = ref<any | null>(null);
    // canplay 事件是否发生
    let isCanplay = false;
    // videoPlay 函数是否被调用
    let isVideoPlay = false;
    let playing: boolean = false;

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

          isCanplay = true;

          if (isCanplay && isVideoPlay) {
            if (videoTag.value) {
              videoTag.value.play();
              playing = true;
            }
          }
        });
    });

    const videoPlay = () => {
      isVideoPlay = true;
      if (isCanplay && isVideoPlay) {
        videoTag.value.play();
        playing = true;
      }
    };

    const videoClick = () => {
      if (playing) {
        videoTag.value.pause();
      } else {
        videoTag.value.play();
      }
      playing = !playing;
    };

    return {
      videoTag,
      getResource,
      videoPlay,
      videoClick,
    };
  },
});
</script>
