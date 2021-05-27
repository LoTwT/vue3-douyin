<template>
  <div class="share">
    <div class="title">分享到</div>
    <div class="row" v-for="(line, index) in btnGroups" :key="index">
      <div
        class="col"
        v-for="(item, index) in line"
        :key="index"
        @click="item.hander"
      >
        <div class="icon">
          <img :src="item.imgUrl" :alt="item.txt" />
        </div>
        <div class="desc">{{ item.txt }}</div>
      </div>
    </div>
    <div class="cancel">
      <button type="button" @click="$emit('close:share')">取消</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const btnGroups = [
      [
        {
          imgUrl: "/src/assets/imgs/btm-friend.png",
          txt: "私信好友",
          hander: () => {},
        },
        {
          imgUrl: "/src/assets/imgs/btm-retweet.png",
          txt: "转发",
          hander: () => {},
        },
        {
          imgUrl: "/src/assets/imgs/btm-quan.png",
          txt: "朋友圈",
          hander: () => {},
        },
        {
          imgUrl: "/src/assets/imgs/btm-wechat.png",
          txt: "微信好友",
          hander: () => {},
        },
        {
          imgUrl: "/src/assets/imgs/btm-qzone.png",
          txt: "QQ空间",
          hander: () => {},
        },
      ],
      [
        {
          imgUrl: "/src/assets/imgs/btm-report.png",
          txt: "举报",
          hander: () => {},
        },
        {
          imgUrl: "/src/assets/imgs/btm-save.png",
          txt: "保存至相册",
          hander: () => {},
        },
        {
          imgUrl: "/src/assets/imgs/btm-fav.png",
          txt: "收集",
          hander: () => {},
        },
        {
          imgUrl: "/src/assets/imgs/btm-wp.png",
          txt: "动态壁纸",
          hander: () => {},
        },
        {
          imgUrl: "/src/assets/imgs/btm-nolike.png",
          txt: "不感兴趣",
          hander: () => {},
        },
      ],
    ];

    return {
      btnGroups,
    };
  },
});
</script>

<style scoped>
.share {
  position: fixed;
  left: 0;
  bottom: 0;

  height: 568rem;
  width: 100%;
  background: rgba(0, 0, 0, 0.9);
  border-radius: 15rem 15rem 0 0;
}

.share .title {
  text-align: center;
  margin-top: 22rem;
  font-size: 30rem;
}

.share .row {
  padding: 0 18rem;

  margin-top: 35rem;

  display: flex;
}
.share .col {
  width: 140rem;
}
.share .col .icon {
  width: 98rem;
  height: 98rem;

  margin: 0 auto;
}
.share .col .icon img {
  display: block;
  width: 100%;
  height: 100%;
}
.share .col .desc {
  text-align: center;
  opacity: 0.6;
  margin-top: 18rem;
}

.share .cancel {
  position: absolute;
  left: 0;
  bottom: 0;

  height: 98rem;
  width: 100%;
}
.share button {
  width: 100%;
  height: 100%;
  border: none;
  background: #323232;
}
</style>