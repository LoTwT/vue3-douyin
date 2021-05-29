<template>
  <div class="tab-switch">
    <div class="tab-btns" v-if="tabs">
      <div
        class="tab-btn"
        :class="{ active: index === curr }"
        v-for="(tab, index) in tabs"
        :key="Number(index)"
        @click="$emit('update:curr', index)"
      >
        {{ tab.title }}
        <span v-if="tab.value">{{ numberToString(tab.value) }}</span>
      </div>
    </div>
    <div class="tab-items">
      <div class="tab-item">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { numberToString } from "../../../utils/common";

export default defineComponent({
  props: ["tabs", "curr"],
  setup() {
    return {
      numberToString,
    };
  },
});
</script>

<style scoped>
.tab-switch {
  margin-top: 55rem;
}
.tab-switch .tab-btns {
  display: flex;
}
.tab-switch .tab-btn {
  flex: 1;
  text-align: center;
  opacity: 0.6;

  height: 73rem;
  line-height: 73rem;
}
.tab-switch .tab-btn.active {
  opacity: 1;
  font-weight: 700;
  border-bottom: 4rem solid #f3cf4a;
}
.tab-switch .tab-items {
  margin-top: 32rem;
}
</style>
