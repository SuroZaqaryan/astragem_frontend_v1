<script setup>
import { computed } from "vue";
import BaseIcon from "@/components/common/atoms/base-icon/BaseIcon.vue";

const props = defineProps({
  options: {
    required: true,
    type: Array,
  },

  modelValue: {
    type: [String, Number],
    default: null,
    required: true,
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
  <label
    v-for="option in options"
    :key="option.value"
    :class="[
      option.value === model ? 'card-category--active' : '',
      { disabled: option.disabled },
    ]"
    class="card-category"
  >
    <input
      :id="option.value"
      v-model="model"
      type="radio"
      :value="option.value"
      :disabled="option.disabled"
    />

    <div class="card-category__info">
      <div class="card-category__info-block">
        <img
          width="24"
          height="24"
          :src="`/src/assets/images/base-cards-images/${option.icon}`"
          class="card-category__info-indicator"
          alt="image"
        />

        <p class="card-category__info-title">{{ option.title }}</p>
      </div>

      <div v-if="option.disabled" class="card-category__has-lock">
        <base-icon src="repeat/lock.svg" width="16" height="16" />
      </div>
    </div>

    <div class="card-category__description">
      <p>{{ option.description }}</p>
    </div>
  </label>
</template>

<style lang="scss" scoped>
@import "./BaseCardCategory";
</style>
