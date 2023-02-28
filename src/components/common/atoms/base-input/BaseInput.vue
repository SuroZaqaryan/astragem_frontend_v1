<script>
import { ref, computed } from "vue";

const TYPES = [
  "text",
  "password",
  "email",
  "number",
  "url",
  "tel",
  "search",
  "color",
];

const includes = (types) => (type) => types.includes(type);

export default {
  props: {
    label: {
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
      default: "icon",
      required: false,
    },
    icon: {
      type: [String, Number],
      default: "",
      required: false,
    },
    modelValue: {
      type: [String, Number],
      default: "",
      required: true,
    },
    max: {
      type: [String, Number],
      default: 30,
      required: false,
    },
    placeholder: {
      type: String,
      default: "",
      required: false,
    },
    type: {
      type: String,
      default: "text",
      validator(value) {
        const isValid = includes(TYPES)(value);
        if (!isValid) {
          console.warn(`Valid Types - ${TYPES}`);
        }
        return isValid;
      },
    },
  },

  emits: ["update:modelValue"],

  setup(props, { emit }) {
    const value = ref(props.value);

    const isEmpty = computed(() => value.value === "");

    const handleUpdate = (event) => {
      emit("update:modelValue", event.target.value);
    };

    return {
      isEmpty,
      handleUpdate,
    };
  },
};
</script>

<template>
  <div class="base-input">
    <div v-if="label.length || icon.length" class="base-input__text-icon">
      <label v-if="label.length">
        {{ label }}
      </label>
      <img v-if="icon.length" width="22" height="22" :src="icon" :alt="alt" />
    </div>

    <input
      :class="[{ disabled: disabled }]"
      :maxlength="max"
      :type="type"
      :value="modelValue"
      :disabled="disabled"
      :placeholder="placeholder"
      v-bind="$attrs"
      @input="handleUpdate"
    />

    <p v-if="isEmpty">Поле пустое</p>
  </div>
</template>

<style lang="scss" scoped>
@import "./BaseInput";
</style>
