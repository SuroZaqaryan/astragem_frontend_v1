<script setup>
import { useSideBar } from "@/stores/sidebar.js";
import { BaseQuery } from "@/service/base-query.js";
import BodyPartLayout from "@/layouts/body-part-layout/BodyPartLayout.vue";

const { nextRoute } = useSideBar();
const { isLoading, data } = BaseQuery()({ endpoint: "body-height" });
</script>

<template>
  <body-part-layout v-if="!isLoading" title="Find your height">
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
  </body-part-layout>
</template>

<style lang="scss" scoped>
@import "BodyHeight";
</style>
