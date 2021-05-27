<template>
  <div class="comment">
    <a
      href="javascript:;"
      class="btn-close"
      @click="$emit('close:comment')"
    ></a>

    <div class="locale" v-if="video.locale">
      <div class="icon-locale"></div>
      <div class="locale-name">
        <div class="locale-title">
          {{ video.locale.title }}·{{ video.locale.subtitle }}
        </div>
        <div class="locale-desc">{{ video.locale.title }}</div>
      </div>
    </div>

    <div class="comment-count">{{ video.comments }}条评论</div>

    <div class="comment-list" @scroll="scrollComment">
      <div
        class="comment-item"
        v-for="(comment, index) in commentList"
        :key="index"
      >
        <div class="avatar">
          <img :src="getResource(comment.avatar)" alt="" />
        </div>
        <div class="container">
          <div class="name">{{ comment.name }}</div>
          <div class="content">
            {{ comment.content }}
            <span class="time">{{ timestampsToString(comment.time) }}</span>
          </div>
        </div>
        <div class="heart">
          <b class="heart-icon"></b>
          <div class="count">{{ numberToString(comment.likes) }}</div>
        </div>
      </div>
    </div>

    <div class="input-container" :class="{ active: inputFocus }">
      <input
        type="text"
        class="input"
        placeholder="有爱评论，说点儿好听的 ~"
        @focus="showButton"
        @blur="hideButton"
        v-model="commentContent"
      />
      <button type="button" class="btn" @click="submitComment">发送</button>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref, watchEffect } from "vue";
import axios from "../../axios";
import {
  getResource,
  numberToString,
  timestampsToString,
} from "../../utils/common";

export default defineComponent({
  props: ["video"],
  setup(props) {
    const commentList = ref<any>([]);
    const commentPage = ref(1);
    const inputFocus = ref(false);
    const commentContent = ref("");

    const stopRequest = watchEffect(() => {
      axios(`/video/comment/${props.video.ID}`, {
        params: {
          page: commentPage.value,
        },
      }).then((res) => {
        if (res.data.length === 0) {
          stopRequest();
          return;
        }
        commentList.value = [...commentList.value, ...res.data];
      });
    });

    function scrollComment(ev: Event) {
      const divList = ev.target;
      if (divList) {
        // 滚动高度
        const scrollHeight = (divList as HTMLDivElement).scrollTop;
        // 实际内容高度
        const contentHeight = (divList as HTMLDivElement).scrollHeight;
        // 父级高度
        const parentHeight = (divList as HTMLDivElement).offsetHeight;

        if (scrollHeight + 10 >= contentHeight - parentHeight) {
          commentPage.value++;
        }
      }
    }

    const showButton = () => (inputFocus.value = true);

    const hideButton = () => setTimeout(() => (inputFocus.value = false), 50);

    const submitComment = () => {
      axios
        .post(`/video/comment/${props.video.ID}`, {
          content: commentContent.value,
        })
        .then((res) => {
          if (res.data === "ok") {
            commentContent.value = "";
            alert("评论成功");
          }
        });
    };

    return {
      commentList,
      getResource,
      numberToString,
      timestampsToString,
      scrollComment,
      inputFocus,
      submitComment,
      commentContent,
      showButton,
      hideButton,
    };
  },
});
</script>


<style scoped>
.comment {
  position: fixed;
  left: 0;
  bottom: 0;

  height: 75%;
  width: 100%;
  background: rgba(0, 0, 0, 0.9);
  border-radius: 15rem 15rem 0 0;

  display: flex;
  flex-direction: column;

  padding-top: 27rem;
}

.comment .btn-close {
  width: 26rem;
  height: 26rem;
  background: url(../../assets/imgs/icon-close.png) no-repeat;
  background-size: 100%;

  position: absolute;
  right: 32rem;
  top: 32rem;
}

.comment .locale {
  height: 112rem;
  padding-left: 44rem;
  display: flex;
}

.comment .icon-locale {
  width: 40rem;
  height: 40rem;
  background: url(../../assets/imgs/icon-location.png) no-repeat;
  background-size: 100%;
}

.comment .locale-name {
  margin-left: 26rem;
}
.comment .locale-title {
  font-size: 26rem;
}
.comment .locale-desc {
  margin-top: 12rem;
  font-size: 22rem;
  opacity: 0.6;
}

.comment .comment-count {
  height: 38rem;
  line-height: 38rem;
  text-align: center;
}

.comment .comment-list {
  padding-left: 32rem;
  overflow: auto;
  flex: 1;
}

.comment .comment-item {
  margin-top: 40rem;
  display: flex;
}
.comment .comment-item .avatar {
  width: 66rem;
  height: 66rem;
  border-radius: 50%;
  overflow: hidden;
}
.comment .comment-item .avatar img {
  display: block;
  width: 100%;
  height: 100%;
}

.comment .comment-item .container {
  margin-left: 24rem;
  flex: 1;
}
.comment .comment-item .name {
  opacity: 0.6;
  height: 34rem;
  line-height: 34rem;
}
.comment .comment-item .content {
  line-height: 48rem;
}
.comment .comment-item .content .time {
  opacity: 0.6;
  font-size: 26rem;
  margin-left: 10rem;
}

.comment .comment-item .heart {
  width: 96rem;
  opacity: 0.4;
}
.comment .comment-item .heart .heart-icon {
  display: block;
  width: 44rem;
  height: 44rem;
  background: url(../../assets/imgs/icon-heart.png) no-repeat;
  background-size: 100%;

  margin: 0 auto;
}
.comment .comment-item .heart .count {
  text-align: center;
  margin-top: 8rem;
}

.input-container {
  height: 98rem;
  display: flex;
}
.input-container .input {
  padding: 0 32rem;
  flex: 1;
  height: 100%;
  border: none;
  background: transparent;
}
.input-container .btn {
  width: 150rem;
  overflow: hidden;
  border: none;
  background: transparent;

  display: none;
}

.input-container.active .btn {
  display: block;
}
</style>