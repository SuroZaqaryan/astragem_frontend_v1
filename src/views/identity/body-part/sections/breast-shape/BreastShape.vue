<script setup>
import { computed } from "vue";
import { useSideBar } from "@/stores/sidebar.js";
import BaseCardService from "@/components/common/molecules/base-cards/base-card-service/BaseCardService.vue";

const { nextRoute } = useSideBar();
const next = (value) => nextRoute("breast-shape", value);

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const firstFourOptions = computed(() => props.data["breast-shape"].slice(0, 4));
const otherFiveOptions = computed(() => props.data["breast-shape"].slice(4));
</script>

<template>
  <h3 class="content__title">Find Your Breast Shape</h3>

  <div class="content_options">
    <div class="content_options__first-row">
      <base-card-service
        type="square"
        :options="firstFourOptions"
        card-width="193"
        card-image-height="150"
        @change="(value) => next(value)"
      />
    </div>

    <div class="content_options__other-row">
      <base-card-service
        type="square"
        :options="otherFiveOptions"
        card-width="193"
        card-image-height="150"
        @change="(value) => next(value)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "BreastShape";
</style>
