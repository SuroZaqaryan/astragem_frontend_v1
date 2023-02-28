<template>
  <div class="checkbox-group-wrapper">
    <label v-for="(option, idx) in options" :key="idx">
      <BaseCheckbox
          v-model="selectedValues"
          type="checkbox"
          :value="option.value"
          :label="option.label"
          @change="handleChange"
      />
    </label>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";
import BaseCheckbox from "@/components/common/atoms/base-checkbox/BaseCheckbox.vue";

defineProps({
  options: {
    type: Array,
    required: true,
  },
});

const selectedValues = ref([]);
const emit = defineEmits(["change"]);

const handleChange = () => {
  emit("change", selectedValues.value);
};
</script>

<style scoped lang="scss">
label {
  // @include flexbox('center');
  @extend .monts_reg_14;
}
</style>
