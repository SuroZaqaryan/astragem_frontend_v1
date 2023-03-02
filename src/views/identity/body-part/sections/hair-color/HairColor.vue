<script setup>
import { useSideBar } from "@/stores/sidebar.js";
import { BaseQuery } from "@/service/base-query.js";
import BodyPartLayout from "@/layouts/body-part-layout/BodyPartLayout.vue";
import BaseCardColorful_4x5 from "@/components/common/molecules/base-cards/base-card-colorful-4x5/BaseCardColorful_4x5.vue";

const { nextRoute } = useSideBar();
const { isLoading, data } = BaseQuery()({ endpoint: "hair-color" });
</script>

<template>
  <body-part-layout v-if="!isLoading" title="Hair Color">
    <base-card-colorful_4x5
      type="square"
      :options="data"
      @change="(value) => nextRoute('hair-color', value)"
    />
  </body-part-layout>
</template>
