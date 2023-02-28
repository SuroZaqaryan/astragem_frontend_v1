<script setup>
import { computed, defineEmits } from "vue";

const props = defineProps({
  id: {
    type: String,
    default: "",
  },
  variant: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    required: false,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: "",
  },
  validate: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: [Array, Boolean, String],
    default: false,
  },
  value: {
    type: [Boolean, String, Object],
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

const model = computed({
  get() {
    return props.modelValue;
  },

  set(value) {
    emit("update:modelValue", value);
  },
});

const switchObject = computed(() => ({
  active: props.modelValue,
  disabled: props.disabled,
  "switch-light": props.variant === "light",
}));
</script>

<template>
  <label :class="switchObject" class="base-switch">
    <input v-model="model" type="checkbox" :disabled="disabled" />
    <span class="base-switch__toggle"></span>
  </label>
</template>

<style lang="scss" scoped>
@import "./BaseSwitch.scss";
</style>
