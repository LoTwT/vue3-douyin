<template>
  <div
    class="video"
    @touchstart="touchStart"
    @touchmove="touchMove"
    @touchend="touchEnd"
  >
    <div class="video-entry" :style="{ top: t0 + 'px' }">
      <container
        v-if="videoList.length > 0"
        :src="videoList[index0].video"
        ref="v0"
      />
      <right-asider
        v-if="videoList.length > 0"
        :video="videoList[index0]"
        @show:comment="videoCommentShow = true"
        @show:share="videoShareShow = true"
        @updateLiked="changeLike"
      />
      <div class="bottom-nav">
        <video-info v-if="videoList.length > 0" :video="videoList[index0]" />
      </div>
    </div>

    <div
      v-if="videoList[index1]"
      class="video-entry second"
      :style="{ top: t1 + 'px' }"
    >
      <container
        v-if="videoList.length > 0"
        :src="videoList[index1].video"
        ref="v1"
      />
      <right-asider
        v-if="videoList.length > 0"
        :video="videoList[index1]"
        @show:comment="videoCommentShow = true"
        @show:share="videoShareShow = true"
        @updateLike="changeLike"
      />
      <div class="bottom-nav">
        <video-info v-if="videoList.length > 0" :video="videoList[index1]" />
      </div>
    </div>

    <top-nav
      :type="videoCategory"
      @update:type="videoCategory = $event || 'recommend'"
    />
    <div class="bottom-nav">
      <bottom-nav />
    </div>

    <video-comment
      v-if="videoList.length > 0 && videoCommentShow"
      @close:comment="videoCommentShow = false"
      :video="videoList[0]"
    />

    <viedo-share v-if="videoShareShow" @close:share="videoShareShow = false" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect, watch } from "vue";
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
    const videoList = ref<any[]>([]);
    // 分享
    const videoShareShow = ref(false);

    //请求数据
    const loadData = () => {
      const url = uid
        ? `/user/videos/${uid}`
        : `/video/list/${videoCategory.value}`;
      axios(url).then((res) => {
        if (uid) {
          videoList.value = res.data;
        } else {
          videoList.value = [...videoList.value, ...res.data];
        }
      });
    };

    watchEffect(loadData);

    function changeLike(liked: boolean) {
      (videoList.value[0] as any).liked = liked;
    }

    const index0 = ref(0);
    const index1 = ref(1);

    const v0 = ref(null);
    const v1 = ref(null);

    watch(v0, () => {
      const v0Element: any = v0.value;
      v0Element && v0Element.videoPlay();
    });

    const clientHeight: number = document.documentElement.clientHeight;

    const t0 = ref(0);
    const t1 = ref(clientHeight);

    let startY: number;
    let deltaY: number;
    // 移动端事件
    const touchStart = (ev: any) => {
      deltaY = 0;
      startY = ev.targetTouches[0].clientY;
    };
    const touchMove = (ev: any) => {
      deltaY = ev.targetTouches[0].clientY - startY;

      t0.value = deltaY;
      t1.value = clientHeight + deltaY;
    };
    const touchEnd = () => {
      // 下一个
      if (
        index0.value < videoList.value.length &&
        -deltaY >= clientHeight / 2
      ) {
        t0.value = 0;
        t1.value = clientHeight;
        index0.value++;
        index1.value++;
        (v1 as any).value.videoPlay();
        if (index1.value + 1 >= videoList.value.length) {
          loadData();
        }
      } else {
        // 不动
        t0.value = 0;
        t1.value = clientHeight;
      }
    };

    return {
      videoList,
      videoCategory,
      videoCommentShow,
      changeLike,
      videoShareShow,

      touchStart,
      touchMove,
      touchEnd,

      v0,
      v1,

      t0,
      t1,

      index0,
      index1,
    };
  },
});
</script>


<style scoped>
.video-entry {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
}

.video-entry.second {
  top: 100%;
}
</style>