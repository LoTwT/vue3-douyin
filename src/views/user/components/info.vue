<template>
  <div class="info">
    <div class="user-info">
      <div class="avatar">
        <img :src="getResource(userInfo.avatar)" alt="" />
      </div>
      <div class="follow">
        <button type="button" class="btn-follow">+ 关注</button>
      </div>
    </div>
    <div class="user-name">{{ userInfo.name }}</div>
    <div class="user-id">抖音号：{{ userInfo.ID }}</div>
    <div class="user-cert" v-if="userInfo.certification">
      <b
        class="cert-icon cert-person"
        v-if="userInfo.certification.type === 'person'"
      ></b>
      <b class="cert-icon cert-org" v-else></b>
      {{ userInfo.certification.txt }}
    </div>
    <div class="showcase" v-if="userInfo.shop">
      <b class="icon-showcase"></b>
      商品橱窗
    </div>
    <div class="slogan">
      {{ userInfo.slogan }}
    </div>
    <div class="user-num">
      <div class="count">
        <span class="num">{{ numberToString(userInfo.likes) }}</span>
        <span>获赞</span>
      </div>
      <div class="count">
        <span class="num">{{ numberToString(userInfo.follows) }}</span>
        <span>关注</span>
      </div>
      <div class="count">
        <span class="num">{{ numberToString(userInfo.followers) }}</span>
        <span>粉丝</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { getResource, numberToString } from "../../../utils/common";

export default defineComponent({
  props: ["userInfo"],
  setup() {
    return {
      getResource,
      numberToString,
    };
  },
});
</script>

<style scoped>
.info {
  padding: 0 24rem;
}

.info .user-info {
  margin-top: 24rem;
  height: 72rem;

  display: flex;
}

.info .avatar {
  width: 180rem;
  height: 180rem;
  border: 4rem #000 solid;
  border-radius: 50%;
  overflow: hidden;

  position: relative;
  top: -58rem;
}
.info .avatar img {
  display: block;
  width: 100%;
  height: 100%;
}

.info .follow {
  margin-left: 45rem;
  width: 454rem;
  height: 100%;
}
.info .follow button {
  width: 100%;
  height: 100%;
  background: #e9445a;
  border: none;
  font-size: 30rem;
}

.info .user-name {
  margin-top: 84rem;
  font-size: 44rem;
}
.info .user-id {
  margin-top: 22rem;
  opacity: 0.6;
}
.info .user-cert {
  margin-top: 28rem;
}

.cert-icon {
  display: inline-block;
  width: 26rem;
  height: 26rem;
  background-repeat: no-repeat;
  background-size: 100%;
  position: relative;
  top: 4rem;
}
.cert-org {
  background-image: url(../../../assets/imgs/icon-cert-org.png);
}
.cert-person {
  background-image: url(../../../assets/imgs/icon-cert-person.png);
}

.showcase {
  height: 64rem;
  line-height: 64rem;
  margin-top: 30rem;
  border-top: 1px solid #32333d;
  border-bottom: 1px solid #32333d;
  color: #f3cf4a;
}
.showcase .icon-showcase {
  display: inline-block;
  width: 32rem;
  height: 32rem;
  background: url(../../../assets/imgs/icon-shop.png) no-repeat;
  background-size: 100%;
  position: relative;
  top: 8rem;
  margin-right: 6rem;
}

.slogan {
  margin-top: 16rem;
  line-height: 42rem;
}

.user-num {
  margin-top: 40rem;
  display: flex;
}
.user-num .count {
  margin-right: 30rem;
}
.user-num .count span {
  opacity: 0.6;
}
.user-num .count span.num {
  opacity: 1;
  font-weight: 700;
  margin-right: 6rem;
}
</style>