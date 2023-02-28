<template>
  <label
    :class="['base-radio', { disabled: option.disabled }]"
    :for="option.value"
  >
    <input
      :id="option.value"
      type="radio"
      :value="option.value"
      name="radio-input"
      @change="$emit('input', $event.target.value)"
    />
    <i />
    <span>{{ option.title }}</span>
  </label>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    option: {
      required: true,
      type: Object,
    },
  },
});
</script>

<style lang="scss" scoped>
@import "./BaseRadio.scss";
</style>
