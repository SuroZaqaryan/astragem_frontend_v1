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
</script>

<template>
  <form>
    <label v-for="option in options" :key="option.value" class="card-icon">
      <input
        :id="option.value"
        v-model="model"
        type="radio"
        :value="option.value"
      />

      <div v-if="option.image" class="card-icon__img">
        <img :src="`/src/assets/images/${option.image}`" alt="image" />
      </div>

      <div class="card-icon__info">
        <div v-if="option.icon" class="card-icon__icon">
          <img
            width="32"
            height="32"
            :src="`/src/assets/images/${option.icon}`"
            alt="icon"
          />
        </div>

        <div class="card-icon__text">
          <h3 class="card-icon__title">{{ option.title }}</h3>
          <p class="card-icon__description">{{ option.description }}</p>
        </div>
      </div>
    </label>
  </form>
</template>

<style lang="scss" scoped>
@import "./BaseCardIcon.scss";
</style>
