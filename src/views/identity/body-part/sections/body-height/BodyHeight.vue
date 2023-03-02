<script setup>
import { useSideBar } from "@/stores/sidebar.js";

const { nextRoute } = useSideBar();
const next = (value) => nextRoute("body-height", value);

defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <h3 class="content__title">Find your height</h3>
  <form class="content_options">
    <label v-for="item in data['body-height']" :key="item.value">
      <input
        type="radio"
        :value="item.value"
        @change="(e) => next(e.target.value)"
      />

      <div class="card-image__img">
        <img :src="`/src/assets/images/${item.image}`" alt="image" />
      </div>
    </label>
  </form>
</template>

<style lang="scss" scoped>
@import "BodyHeight";
</style>
