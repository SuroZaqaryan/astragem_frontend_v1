<!-- This component automatically creates a 4 by 5 grid -->

<script setup>
import { ref, computed } from "vue";

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

// These two functions, firstFourChunks and otherFiveChunks are for wrapping elements.
// firstFourChunks will wrap the first four elements in a block, and otherFiveChunks
// will wrap the rest every five elements in a block.

const firstFourChunks = computed(() => props.options.slice(0, 4));

const otherFiveChunks = computed(() =>
  props.options.slice(4).reduce((acc, item, index) => {
    const chunkIndex = Math.floor(index / 5);
    acc[chunkIndex] = [...(acc[chunkIndex] || []), item];
    return acc;
  }, [])
);

const computedStyles = (color) =>
  computed(() => ({
    outline: `2px solid ${color}`,
    borderColor: "transparent",
  }));
</script>

<template>
  <div class="columns-4x5">
    <!-- The first four elements are wrapped in a block -->
    <div class="columns-4x5__first-four-chunks">
      <label
        v-for="option in firstFourChunks"
        :key="option.value"
        :class="[
          hoveredColor === option.color && option.color === 'colorful'
            ? 'card-hair-color--colorful'
            : '',
        ]"
        class="card-hair-color"
        :style="
          hoveredColor === option.color
            ? computedStyles(option.color).value
            : ''
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
          <img :src="`/src/assets/images/${option.image}`" alt="image" />
        </div>
      </label>
    </div>

    <!-- The remaining 5 elements are sequentially wrapped in a block -->
    <div
      v-for="(chunk, chunkIndex) in otherFiveChunks"
      :key="'chunk-' + chunkIndex"
      class="columns-4x5__other-five-chunks"
    >
      <label
        v-for="option in chunk"
        :key="option.value"
        :class="[
          hoveredColor === option.color && option.color === 'colorful'
            ? 'card-hair-color--colorful'
            : '',
        ]"
        class="card-hair-color"
        :style="
          hoveredColor === option.color
            ? computedStyles(option.color).value
            : ''
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
          <img :src="`/src/assets/images/${option.image}`" alt="image" />
        </div>
      </label>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./BaseCardColorful_4x5.scss";
</style>
