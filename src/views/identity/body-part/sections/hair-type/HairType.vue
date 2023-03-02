<script setup>
import { useSideBar } from "@/stores/sidebar.js";
import BaseCardService from "@/components/common/molecules/base-cards/base-card-service/BaseCardService.vue";

const { nextRoute } = useSideBar();
const next = (value) => nextRoute("hair-type", value);

defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <h3 class="content__title">Hair Type</h3>

  <div class="content_options">
    <base-card-service
      type="square"
      :options="data['hair-type']"
      @change="(value) => next(value)"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "HairType";
</style>
