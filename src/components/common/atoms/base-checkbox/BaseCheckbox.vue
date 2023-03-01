<script setup>
import { computed } from "vue";

const props = defineProps({
  id: {
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
</script>

<template>
  <label :class="['base-checkbox', { disabled: disabled }]">
    <input :id="id" v-model="model" :value="value" type="checkbox" />
    <slot
      ><span>{{ label }}</span></slot
    >
  </label>
</template>

<style lang="scss" scoped>
@import "./BaseCheckbox.scss";
</style>
