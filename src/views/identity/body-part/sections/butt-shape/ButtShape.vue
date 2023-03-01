<script setup>
import { useSideBar } from "@/stores/sidebar.js";
import { BaseQuery } from "@/service/base-query.js";
import IdentityLayout from "@/layouts/identity-layout/IdentityLayout.vue";
import BaseCardIcon from "@/components/common/molecules/base-cards/base-card-icon/BaseCardIcon.vue";

const { nextRoute } = useSideBar();
const { isLoading, data } = BaseQuery()({ endpoint: "butt-shape" });
</script>

<template>
  <identity-layout v-if="!isLoading" title="Find Your Butt Shape">
    <div class="content_options">
      <base-card-icon
        :options="data"
        @change="(value) => nextRoute('butt-shape', value)"
      />
    </div>
  </identity-layout>
</template>

<style lang="scss" scoped>
@import "ButtShape";
</style>
