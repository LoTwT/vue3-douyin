<template>
  <div class="videos">
    <router-link
      :to="{ name: 'video', params: { uid: userId } }"
      class="video-item"
      v-for="video in videoList"
      :key="video.ID"
    >
      <img src="/src/assets/imgs/video-cover.png" alt="" />
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from "vue";
import axios from "../../../axios";

export default defineComponent({
  props: ["userId"],
  setup(props) {
    const { userId } = props;
    const videoList = ref<any>([]);
    const page = ref(1);

    const stopRequest = watchEffect(() => {
      axios(`/video/user/${userId}`, {
        params: {
          page: 1,
        },
      }).then((res) => {
        if (!res.data.length) {
          stopRequest();
          return;
        }
        videoList.value = [...videoList.value, ...res.data];
      });
    });

    watchEffect((invalidaate) => {
      const handle = () => {
        // 滚动高度
        const scrollHeight =
          document.documentElement.scrollTop || document.body.scrollTop;
        // 屏幕高度(视窗高度)
        const screenHeight = document.documentElement.clientHeight;
        // 内容高度
        const contentHeight = document.body.scrollHeight;
        if (scrollHeight + 10 >= contentHeight - screenHeight) {
          page.value++;
        }
      };
      window.addEventListener("scroll", handle);

      invalidaate(() => {
        window.removeEventListener("scroll", handle);
      });
    });

    return {
      videoList,
    };
  },
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
