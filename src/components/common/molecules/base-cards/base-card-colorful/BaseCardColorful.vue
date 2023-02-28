<script setup>
import { ref, computed, defineEmits } from "vue";

const props = defineProps({
  options: {
    required: true,
    type: Array,
  },

  modelValue: {
    type: [Number, String],
    required: false,
    default: "",
  },

  width: {
    type: String,
    required: false,
    default: "200",
  },
});

const options = ref([...props.options]);
const hoveredColor = ref("");

const emit = defineEmits(["update:modelValue", "change"]);

const model = computed({
  get() {
    return props.modelValue;
  },

  set(value) {
    emit("update:modelValue", value);
    emit("change", value, options);
  },
});

const computedStyles = (color) =>
  computed(() => ({
    outline: `2px solid ${color}`,
    borderColor: "transparent",
  }));

const styleProps = {
  "--card-width": props.width + "px",
};
</script>

<template>
  <div :style="styleProps" class="card-colorful">
    <label
      v-for="option in options"
      :key="option.value"
      :class="[
        hoveredColor === option.color && option.color === 'colorful'
          ? 'card-hair-color--colorful'
          : '',
      ]"
      class="card-hair-color"
      :style="
        hoveredColor === option.color ? computedStyles(option.color).value : ''
      "
      @mouseover="hoveredColor = option.color"
      @mouseleave="hoveredColor = null"
    >
      <input
        :id="option.value"
        v-model="model"
        type="radio"
        :value="option.value"
      />

      <div class="card-hair-color__info">
        <img
          v-if="option.color === 'colorful'"
          src="@/assets/images/base-cards-images/base-card-4x5/colorful-hair.svg"
          alt="colorful hair"
        />
        <div
          v-else
          :style="{ background: option.color }"
          class="card-hair-color__info-indicator"
        />

        <p class="card-hair-color__info-title">{{ option.title }}</p>
      </div>

      <div class="card-hair-color__image">
        <img :src="require(`@/assets/images/${option.image}`)" alt="image" />
      </div>
    </label>
  </div>
</template>

<style lang="scss" scoped>
@import "./BaseCardColorful.scss";
</style>
