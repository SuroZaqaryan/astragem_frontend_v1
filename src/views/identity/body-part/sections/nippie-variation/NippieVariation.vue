<script setup>
import { useSideBar } from "@/stores/sidebar.js";
import { BaseQuery } from "@/service/base-query.js";
import IdentityLayout from "@/layouts/identity-layout/IdentityLayout.vue";
import BaseCardService from "@/components/common/molecules/base-cards/base-card-service/BaseCardService.vue";

const { nextRoute } = useSideBar();
const { isLoading, data } = BaseQuery()({ endpoint: "nippie-variation" });
</script>

<template>
  <identity-layout v-if="!isLoading" title="Find Nipple Variation">
    <div class="content_options">
      <base-card-service
        type="square"
        :options="data"
        @change="(value) => nextRoute('nippie-variation', value)"
      />
    </div>
  </identity-layout>
</template>

<style lang="scss" scoped>
@import "NippieVariation";
</style>
