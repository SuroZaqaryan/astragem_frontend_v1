<script>
import { ref } from "vue";

import BaseIcon from "@/components/common/atoms/base-icon/BaseIcon.vue";

export default {
  components: {
    BaseIcon,
  },

  props: {
    placeholder: {
      type: String,
      default: "",
      required: false,
    },

    disabled: {
      type: Boolean,
      required: false,
    },
  },

  emits: ["update:modelValue"],

  setup(props, { emit }) {
    const value = ref("");

    const handleUpdate = (event) => {
      value.value = event.target.value.replace(/\D/g, "");
      emit("update:modelValue", value.value);
    };

    return {
      value,
      handleUpdate,
    };
  },
};
</script>

<template>
  <div class="base-input-currency">
    <input
      v-model.number="value"
      :placeholder="placeholder"
      :class="[{ disabled: disabled }]"
      :disabled="disabled"
      maxlength="12"
      @input="handleUpdate"
    />
    <div class="base-input-currency__currency-icon">
      <base-icon src="input-currency/currency.svg" width="20" height="20" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./BaseInputCurrency.scss";
</style>
