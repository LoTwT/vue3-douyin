<template>
  <div class="video">
    <container v-if="videoList.length > 0" :src="videoList[0].video" />
    <top-nav
      :currCategory="videoCategory"
      @update:category="videoCategory = $event"
    />
    <div class="bottom-nav">
      <video-info v-if="videoList.length > 0" :video="videoList[0]" />
      <bottom-nav />
    </div>
    <right-asider
      v-if="videoList.length > 0"
      :video="videoList[0]"
      @show:comment="videoCommentShow = true"
      @update:like="changeLike"
    />

    <videwo-comment
      v-if="videoList.length > 0 && videoCommentShow"
      @close:comment="videoCommentShow = false"
      :video="videoList[0]"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from "vue";
import axios from "../axios";

import "../assets/css/video.css";
import container from "../components/video/container.vue";
import topNav from "../components/video/top_nav.vue";
import videoInfo from "../components/video/video_info.vue";
import bottomNav from "../components/video/bottom_nav.vue";
import rightAsider from "../components/video/right_asider.vue";

import videwoComment from "../components/video/comment.vue";

export default defineComponent({
  components: {
    container,
    topNav,
    videoInfo,
    bottomNav,
    rightAsider,
    videwoComment,
  },
  setup() {
    // 是否显示评论
    const videoCommentShow = ref(false);
    // 视频类别
    const videoCategory = ref("recommend");
    // 视频数据
    const videoList = ref([]);

    const loadData = () => {
      axios(`/video/list/${videoCategory.value}`).then(
        (res) => (videoList.value = res.data)
      );
    };

    watchEffect(() => {
      loadData();
    });

    function changeLike(liked: boolean) {
      (videoList.value[0] as any).liked = liked;
    }

    return {
      videoList,
      videoCategory,
      videoCommentShow,
      changeLike,
    };
  },
});
</script>
