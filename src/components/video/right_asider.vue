<template>
  <div class="right-asider">
    <div class="author">
      <div class="author-avatar">
        <img :src="getResource(video.author.avatar)" />
      </div>
      <b class="add-btn"></b>
    </div>
    <div class="like">
      <b class="icon icon-heart"></b>
      <div class="desc">{{ numberToString(video.likes) }}</div>
    </div>
    <div class="comment">
      <b class="icon icon-comment"></b>
      <div class="desc">{{ numberToString(video.comments) }}</div>
    </div>
    <div class="share">
      <b class="icon icon-share"></b>
      <div class="desc">{{ numberToString(video.shares) }}</div>
    </div>
    <div class="music">
      <img src="/src/assets/imgs/disc.png" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getResource } from "../../utils/common";

export default defineComponent({
  props: ["video"],
  setup() {
    const numberToString = (num: number): string => {
      if (num > 10000) {
        return (num / 10000).toFixed(1) + "w";
      } else {
        return num.toString();
      }
    };

    return {
      getResource,
      numberToString,
    };
  },
});
</script>
