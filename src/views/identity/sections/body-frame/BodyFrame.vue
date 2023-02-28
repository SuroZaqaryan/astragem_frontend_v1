<script setup>
import { useSideBar } from "@/stores/sidebar";
import { BaseQuery } from "@/service/base-query";
import IdentityLayout from "@/layouts/identity-layout/IdentityLayout.vue";
import BaseCardService from "@/components/common/molecules/base-cards/base-card-service/BaseCardService.vue";

const { nextRoute } = useSideBar();
const { isLoading, data } = BaseQuery()({ endpoint: "frame" });
</script>

<template>
  <identity-layout v-if="!isLoading" title="Find Your Frame">
    <div class="content_options">
      <base-card-service
        type="square"
        :options="data"
        @change="(value) => nextRoute('frame', value)"
      />
    </div>
  </identity-layout>
</template>

<style lang="scss" scoped>
@import "./BodyFrame.scss";
</style>
