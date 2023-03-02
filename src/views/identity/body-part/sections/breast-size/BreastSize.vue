<script setup>
import { useSideBar } from "@/stores/sidebar.js";
import { BaseQuery } from "@/service/base-query.js";
import BodyPartLayout from "@/layouts/body-part-layout/BodyPartLayout.vue";
import BaseCardService from "@/components/common/molecules/base-cards/base-card-service/BaseCardService.vue";

const { nextRoute } = useSideBar();
const { isLoading, data } = BaseQuery()({ endpoint: "breast-size" });
</script>

<template>
  <body-part-layout v-if="!isLoading" title="Find Your Breast Size">
    <div class="content_options">
      <base-card-service
        type="square"
        :options="data"
        @change="(value) => nextRoute('breast-size', value)"
      />
    </div>
  </body-part-layout>
</template>

<style lang="scss" scoped>
@import "BreastSize";
</style>
