<script setup>
import { computed, useSlots } from "vue";

const slots = useSlots();

const props = defineProps({
  variant: {
    type: String,
    default: "",
    required: false,
  },
  disabled: {
    type: Boolean,
    default: false,
    required: false,
  },
  alt: {
    type: String,
    required: false,
    default: "icon",
  },
  icon: {
    type: String,
    required: false,
    default: "",
  },
  fullWidth: {
    type: Boolean,
    required: false,
  },
  iconLeft: {
    type: Boolean,
    required: false,
  },
  iconRight: {
    type: Boolean,
    required: false,
  },
});

const variantColor = computed(() => ({
  color() {
    switch (props.variant) {
      case "primary":
        return "primary";
      case "primary-light":
        return "primary-light";
      case "light":
        return "light";
      case "active":
        return "active";
      default:
        return "";
    }
  },
}));

const generalClasses = computed(() => ({
  "icon-left": props.iconLeft,
  "icon-right": props.iconRight,
  "full-width": props.fullWidth,
}));
</script>

<template>
  <button
    :class="[variantColor.color(), generalClasses, { disabled: disabled }]"
    class="base-button"
    :disabled="disabled"
    v-on="$attrs"
  >
    <span v-if="slots.default"><slot></slot></span>
    <img v-if="icon !== ''" width="20" height="20" :src="icon" :alt="alt" />
  </button>
</template>

<style lang="scss" scoped>
@import "./BaseButton";
</style>
