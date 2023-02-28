<script setup>
import { useSideBar } from "@/stores/sidebar";
import { BaseQuery } from "@/service/base-query";
import IdentityLayout from "@/layouts/identity-layout/IdentityLayout.vue";
import BaseCardColorful_4x5 from "@/components/common/molecules/base-cards/base-card-colorful-4x5/BaseCardColorful_4x5.vue";

const { nextRoute } = useSideBar();
const { isLoading, data } = BaseQuery()({ endpoint: "hair-color" });
</script>

<template>
  <identity-layout v-if="!isLoading" title="Hair Color">
    <base-card-colorful_4x5
      type="square"
      :options="data"
      @change="(value) => nextRoute('hair-color', value)"
    />
  </identity-layout>
</template>
