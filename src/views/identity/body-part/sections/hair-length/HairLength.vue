<script setup>
import { useSideBar } from "@/stores/sidebar.js";
import { BaseQuery } from "@/service/base-query.js";
import IdentityLayout from "@/layouts/identity-layout/IdentityLayout.vue";

const { nextRoute } = useSideBar();
const { isLoading, data } = BaseQuery()({ endpoint: "hair-length" });
</script>

<template>
  <identity-layout v-if="!isLoading" title="Hair Length">
    <div class="content_options">
      <div class="content_options__variants">
        <div
          v-for="(option, idx) in data"
          :key="idx"
          class="content_options__item"
        >
          <label>
            <span>{{ option.title }}</span>
            <span>{{ option.description }}</span>
            <input
              :value="option.value"
              type="radio"
              @change="(e) => nextRoute('hair-length', e.target.value)"
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
  </identity-layout>
</template>

<style lang="scss" scoped>
@import "HairLength";
</style>
