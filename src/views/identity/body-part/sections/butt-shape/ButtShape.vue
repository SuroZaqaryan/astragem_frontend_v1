<script setup>
import { useSideBar } from "@/stores/sidebar.js";
import BaseCardIcon from "@/components/common/molecules/base-cards/base-card-icon/BaseCardIcon.vue";

const { nextRoute } = useSideBar();
const next = (value) => nextRoute("butt-shape", value);

defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <h3 class="content__title">Find Your Butt Shape</h3>

  <div class="content_options">
    <base-card-icon
      :options="data['butt-shape']"
      @change="(value) => next(value)"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "ButtShape";
</style>
