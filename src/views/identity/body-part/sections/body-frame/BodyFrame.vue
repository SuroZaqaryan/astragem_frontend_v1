<script setup>
import { useSideBar } from "@/stores/sidebar.js";
import BaseCardService from "@/components/common/molecules/base-cards/base-card-service/BaseCardService.vue";

const { nextRoute } = useSideBar();
const next = (value) => nextRoute("body-frame", value);

defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <h3 class="content__title">Find Your Frame</h3>

  <div class="content_options">
    <base-card-service
      type="square"
      :options="data['body-frame']"
      @change="(value) => next(value)"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "BodyFrame";
</style>
