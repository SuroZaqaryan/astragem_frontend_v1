<script setup>
import { useSideBar } from "@/stores/sidebar.js";
import BaseCardColorful_4x5 from "@/components/common/molecules/base-cards/base-card-colorful-4x5/BaseCardColorful_4x5.vue";

const { nextRoute } = useSideBar();
const next = (value) => nextRoute("hair-color", value);

defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <h3 class="content__title">Hair Color</h3>

  <base-card-colorful_4x5
    type="square"
    :options="data['hair-color']"
    @change="(value) => next(value)"
  />
</template>
