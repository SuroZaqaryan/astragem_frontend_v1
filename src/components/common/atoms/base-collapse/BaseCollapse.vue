<template>
  <div class="collapse">
    <div
      class="collapse-header"
      :class="[
        { open: isOpen },
        {
          'collapse-header_arrow': arrow,
          'collapse-header_light-border': lightBorder,
        },
      ]"
      :style="{
        fontSize: `${size}px`,
        fontWeight: weight,
        border: !border && 'none',
      }"
      @click="isOpen = !isOpen"
    >
      <p>{{ title }}</p>
    </div>
    <div ref="content" class="collapse-content" :class="{ open: isOpen }">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    size: {
      type: [Number, String],
      default: null,
    },
    weight: {
      type: Number,
      default: 0,
    },
    arrow: {
      type: Boolean,
      default: false,
    },
    border: {
      type: Boolean,
      default: true,
    },
    lightBorder: {
      type: Boolean,
      default: false,
    },
    collapse: {
      type: Boolean,
    },
  },

  data() {
    return {
      isOpen: this.collapse ? true : false,
      interval: null,
    };
  },
};
</script>

<style src="./BaseCollapse.scss" lang="scss" scoped></style>
