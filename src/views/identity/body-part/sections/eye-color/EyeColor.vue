<script setup>
import { useSideBar } from "@/stores/sidebar.js";
import BaseCardColorful from "@/components/common/molecules/base-cards/base-card-colorful/BaseCardColorful.vue";

const { nextRoute } = useSideBar();
const next = (value) => nextRoute("eye-color", value);

defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <h3 class="content__title">Eye Color</h3>

  <div class="content_options 1">
    <base-card-colorful
      type="square"
      :options="data['eye-color']"
      width="133"
      @change="(value) => next(value)"
    />
  </div>
</template>
