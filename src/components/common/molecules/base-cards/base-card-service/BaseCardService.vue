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

  type: {
    type: String,
    required: false,
    default: "",
  },

  cardWidth: {
    type: String,
    required: false,
    default: "238",
  },

  cardImageHeight: {
    type: String,
    required: false,
    default: "238",
  },
});

console.log('props', props.options);

const options = ref([...props.options]);

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

const getImageUrl = (src) => {
  return new URL(`../../assets/images/${src}`, import.meta.url).href
}

const styleProps = {
  "--card-width": props.cardWidth + "px",
  "--image-height": props.cardImageHeight + "px",
};
</script>

<template>
  <label
    v-for="option in options"
    :key="option.value"
    :class="[`card-image--${props.type}`]"
    class="card-image"
  >
    <input
      :id="option.value"
      v-model="model"
      type="radio"
      :value="option.value"
    />

    <div class="card-image__img">
       <img
        :class="[props.type ? `card-image__img--${props.type}` : '']"
        :src="require(`@/assets/images/${option.image}`)"
        alt="image"
      />  
    </div>

    <div class="card-image__text">
      <h3 class="text__title">{{ option.title }}</h3>
      <p class="text__description">{{ option.description }}</p>
    </div>
  </label>
</template>

<style lang="scss" scoped>
@import "./BaseCardService.scss";
</style>
