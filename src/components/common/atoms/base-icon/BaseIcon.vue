<script setup>
import { computed } from "vue";

defineProps({
  src: {
    type: String,
    require: true,
    default: "",
  },

  width: {
    type: String,
    required: false,
    default: "20",
  },

  height: {
    type: String,
    required: false,
    default: "20",
  },
});

const hasIconSize = (width, height) =>
  computed(() => ({
    width: `${width}px`,
    height: `${height}px`,
  }));
</script>

<template>
  <div class="base-icon">
    <img
      v-if="src"
      :style="width || height ? hasIconSize(width, height).value : null"
      :src="`/src/assets/icons/${src}`"
      alt="icon"
    />
  </div>
</template>

<style lang="scss">
.base-icon {
  width: fit-content;
  display: flex;

  ---base-icon-width: 24px;
  ---base-icon-height: 24px;

  > img {
    width: 100%;
    height: 100%;
  }
}
</style>
