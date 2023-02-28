<script setup>
import { useSideBar } from "@/stores/sidebar";
import { BaseQuery } from "@/service/base-query";
import IdentityLayout from "@/layouts/identity-layout/IdentityLayout.vue";

const { nextRoute } = useSideBar();
const { isLoading, data } = BaseQuery()({ endpoint: "body-height" });
</script>

<template>
  <identity-layout v-if="!isLoading" title="Find your height">
    <div class="content_options">
      <label v-for="item in data" :key="item.value">
        <input
          type="radio"
          :value="item.value"
          @change="(e) => nextRoute('height', e.target.value)"
        />

        <div class="card-image__img">
          <img :src="require(`@/assets/images/${item.image}`)" alt="image" />
        </div>
      </label>
    </div>
  </identity-layout>
</template>

<style lang="scss" scoped>
@import "./BodyHeight.scss";
</style>
