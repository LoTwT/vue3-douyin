<template>
  <div class="right-asider">
    <div class="author">
      <div class="author-avatar">
        <img src="/src/assets/imgs/avatar.jpg" />
      </div>
      <b class="add-btn"></b>
    </div>
    <div class="like">
      <b class="icon icon-heart"></b>
      <div class="desc">432.2w</div>
    </div>
    <div class="comment">
      <b class="icon icon-comment"></b>
      <div class="desc">284</div>
    </div>
    <div class="share">
      <b class="icon icon-share"></b>
      <div class="desc">18.7w</div>
    </div>
    <div class="music">
      <img src="/src/assets/imgs/disc.png" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>
