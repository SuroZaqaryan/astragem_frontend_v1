<template>
  <div>
    <BaseRadioButton
      v-for="option in options"
      :key="option.value"
      :option="option"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import BaseRadioButton from "./BaseRadioButton.vue";

export default defineComponent({
  name: "BaseRadioButtonGroup",
  components: {
    BaseRadioButton,
  },
  props: {
    options: {
      required: true,
      type: Array,
    },
  },
});
</script>
