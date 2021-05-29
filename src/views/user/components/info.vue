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
import { getResource, numberToString } from "../../../utils/common";
import { defineComponent } from "vue";

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
