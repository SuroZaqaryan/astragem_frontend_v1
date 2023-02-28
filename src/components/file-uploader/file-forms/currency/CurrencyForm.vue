<script setup>
import { ref } from "vue";
import BaseInputCurrency from "@/components/common/atoms/base-input-currency/BaseInputCurrency.vue";

const props = defineProps({
  file: { type: Object, required: true }, // current file
});

const currencyValue = ref(props.currencyValue);

const emit = defineEmits(["update:fileCurrency"]);

const updateFileCurrency = (e) => {
  emit("update:fileCurrency", props.file, e.target.value);
};
</script>

<template>
  <div class="currency_form">
    <base-input-currency
      v-model="currencyValue"
      placeholder="0"
      @input="updateFileCurrency"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "./CurrencyForm.scss";
</style>
