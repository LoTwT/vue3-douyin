<template>
  <div class="info">
    <div class="author">{{ video.author.name }}</div>
    <div class="desc">
      {{ video.desc }}
    </div>
    <div class="music">
      <b class="icon-tiktok"></b>
      <div class="title">{{ video.music }}</div>
    </div>
  </div>
  <div class="break-news" v-if="video.bottom">
    <b class="icon icon-hot"></b>
    {{ video.bottom.txt }}
    <i class="right"></i>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["video"],
  setup() {},
});
</script>
