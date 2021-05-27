<template>
  <div class="right-asider">
    <div class="author">
      <div class="author-avatar">
        <img :src="getResource(video.author.avatar)" />
      </div>
      <b class="add-btn"></b>
    </div>
    <div class="like" @click="dealLike">
      <b
        class="icon"
        :class="{ 'icon-heart': !video.liked, 'icon-heart-fill': video.liked }"
      ></b>
      <div class="desc">{{ numberToString(video.likes) }}</div>
    </div>
    <div class="comment" @click="$emit('show:comment')">
      <b class="icon icon-comment"></b>
      <div class="desc">{{ numberToString(video.comments) }}</div>
    </div>
    <div class="share" @click="$emit('show:share')">
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
import { getResource, numberToString } from "../../utils/common";
import axios from "../../axios";

export default defineComponent({
  props: ["video"],
  setup(props, context) {
    const dealLike = () => {
      const { video } = props;

      let url: string = "";
      if (video.liked) {
        url = `/video/unlike/${video.ID}`;
      } else {
        url = `/video/like/${video.ID}`;
      }

      axios(url).then(
        (res) => res.data === "ok" && context.emit("update:like", !video.liked)
      );
    };

    return {
      getResource,
      numberToString,
      dealLike,
    };
  },
});
</script>
