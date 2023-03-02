<script setup>
defineProps({
  src: {
    type: String,
    require: true,
    default: "",
  },
  width: {
    type: String,
    require: false,
  },
  height: {
    type: String,
    require: false,
  },
  local: {
    type: Boolean,
    default: true,
  },
  alt: {
    type: String,
    default: "Image",
  },
  blur: {
    type: Boolean,
    default: false,
  },
  responsiveByHeight: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="base-image" :class="{ 'base-image-height': responsiveByHeight }">
    <img
      v-if="src"
      :width="width"
      :height="height"
      :src="local ? `/src/assets/images/${src}` : src"
      :alt="alt ? alt : src"
      :class="{ 'base-image-blur': blur }"
    />
  </div>
</template>

<style lang="scss" scoped>
.base-image {
  display: flex;
  width: 100%;
  &-height {
    width: auto;
    height: 100%;
  }
}
</style>
