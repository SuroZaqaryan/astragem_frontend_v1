<script setup>
import { useSideBar } from "@/stores/sidebar.js";

const { nextRoute } = useSideBar();
const next = (value) => nextRoute("hair-length", value);

defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <h3 class="content__title">Hair Length</h3>

  <div class="content_options">
    <div class="content_options__variants">
      <div
        v-for="(option, idx) in data['hair-length']"
        :key="idx"
        class="content_options__item"
      >
        <label>
          <span>{{ option.title }}</span>
          <span>{{ option.description }}</span>
          <input
            :value="option.value"
            type="radio"
            @change="(e) => next(e.target.value)"
          />
        </label>
        <img
          src="@/assets/images/identity-images/hair-length/hair-arrow.svg"
          alt="hair-arrow"
        />
      </div>
    </div>

    <div class="content_options__image">
      <img
        src="@/assets/images/identity-images/hair-length/hair-length.png"
        alt="hair-length"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "HairLength";
</style>
