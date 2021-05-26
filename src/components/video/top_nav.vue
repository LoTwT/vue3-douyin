<template>
  <div class="top-nav">
    <div class="icon-container">
      <a href="javascript:;" class="icon icon-live"></a>
    </div>
    <div class="tab-container">
      <a
        href="javascript:;"
        v-for="(category, type) in categories"
        :key="type"
        class="tab-item"
        :class="{ active: currCategory === type }"
        @click="setCategory(type)"
        >{{ category }}</a
      >
    </div>
    <div class="icon-container">
      <a href="javascript:;" class="icon icon-search"></a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    currCategory: {
      type: String,
    },
  },
  setup() {
    return {
      categories: {
        follow: "关注",
        recommend: "推荐",
      },
      setCategory(type: string): void {
        (this as any).$emit("update:category", type);
      },
    };
  },
});
</script>
