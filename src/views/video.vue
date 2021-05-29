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
      @show:share="videoShareShow = true"
      @update:like="changeLike"
    />

    <video-comment
      v-if="videoList.length > 0 && videoCommentShow"
      @close:comment="videoCommentShow = false"
      :video="videoList[0]"
    />

    <viedo-share v-if="videoShareShow" @close:share="videoShareShow = false" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from "vue";
import { useRouter } from "vue-router";
import axios from "../axios";

import "../assets/css/video.css";
import container from "../components/video/container.vue";
import topNav from "../components/video/top_nav.vue";
import videoInfo from "../components/video/video_info.vue";
import bottomNav from "../components/video/bottom_nav.vue";
import rightAsider from "../components/video/right_asider.vue";

import videoComment from "../components/video/comment.vue";
import viedoShare from "../components/video/share.vue";

export default defineComponent({
  components: {
    container,
    topNav,
    videoInfo,
    bottomNav,
    rightAsider,
    videoComment,
    viedoShare,
  },
  setup() {
    const { uid } = useRouter().currentRoute.value.params;

    // 是否显示评论
    const videoCommentShow = ref(false);
    // 视频类别
    const videoCategory = ref("recommend");
    // 视频数据
    const videoList = ref([]);
    // 分享
    const videoShareShow = ref(false);

    // 非指定用户进入时, 请求数据
    const loadDefaultData = () => {
      axios(`/video/list/${videoCategory.value}`).then(
        (res) => (videoList.value = res.data)
      );
    };

    // 指定用户进入时, 请求数据
    const loadTargetData = () => {
      axios(`/user/videos/${uid}`).then((res) => (videoList.value = res.data));
    };

    watchEffect(() => {
      if (!uid) {
        loadDefaultData();
      } else {
        loadTargetData();
      }
    });

    function changeLike(liked: boolean) {
      (videoList.value[0] as any).liked = liked;
    }

    return {
      videoList,
      videoCategory,
      videoCommentShow,
      changeLike,
      videoShareShow,
    };
  },
});
</script>
