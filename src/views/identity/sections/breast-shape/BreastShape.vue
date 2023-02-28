<script setup>
import { computed } from "vue";
import { useSideBar } from "@/stores/sidebar";
import { BaseQuery } from "@/service/base-query";
import IdentityLayout from "@/layouts/identity-layout/IdentityLayout.vue";
import BaseCardService from "@/components/common/molecules/base-cards/base-card-service/BaseCardService.vue";

const { nextRoute } = useSideBar();
const { isLoading, data } = BaseQuery()({ endpoint: "breast-shape" });

const firstFourOptions = computed(() => data.value.slice(0, 4));
const otherFiveOptions = computed(() => data.value.slice(4));
</script>

<template>
  <identity-layout v-if="!isLoading" title="Find Your Breast Shape">
    <div class="content_options">
      <div class="content_options__first-row">
        <base-card-service
          type="square"
          :options="firstFourOptions"
          card-width="193"
          card-image-height="150"
          @change="(value) => nextRoute('breast-shape', value)"
        />
      </div>

      <div class="content_options__other-row">
        <base-card-service
          type="square"
          :options="otherFiveOptions"
          card-width="193"
          card-image-height="150"
          @change="(value) => nextRoute('breast-shape', value)"
        />
      </div>
    </div>
  </identity-layout>
</template>

<style lang="scss" scoped>
@import "./BreastShape.scss";
</style>
