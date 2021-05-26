<template>
  <div class="video">
    <container v-if="videoList.length > 0" :src="videoList[0].video" />
    <top-nav
      :currCategory="videoCategory"
      @update:category="videoCategory = $event"
    />
    <bottom-nav />
    <right-asider />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from "vue";
import axios from "../axios";

import "../assets/css/video.css";
import container from "../components/video/container.vue";
import topNav from "../components/video/top_nav.vue";
import bottomNav from "../components/video/bottom_nav.vue";
import rightAsider from "../components/video/right_asider.vue";

export default defineComponent({
  components: { container, topNav, bottomNav, rightAsider },
  setup() {
    const videoCategory = ref("recommend");
    const videoList = ref([]);

    const loadData = () => {
      axios(`/video/list/${videoCategory.value}`).then(
        (res) => (videoList.value = res.data)
      );
    };

    watchEffect(() => {
      loadData();
    });

    return { videoList, videoCategory };
  },
});
</script>
