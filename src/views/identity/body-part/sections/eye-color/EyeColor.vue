<script setup>
import { useSideBar } from "@/stores/sidebar.js";
import { BaseQuery } from "@/service/base-query.js";
import BodyPartLayout from "@/layouts/body-part-layout/BodyPartLayout.vue";
import BaseCardColorful from "@/components/common/molecules/base-cards/base-card-colorful/BaseCardColorful.vue";

const { nextRoute } = useSideBar();
const { isLoading, data } = BaseQuery()({ endpoint: "eye-color" });
</script>

<template>
  <body-part-layout v-if="!isLoading" title="Eye Color">
    <div class="content_options 1">
      <base-card-colorful
        type="square"
        :options="data"
        width="133"
        @change="(value) => nextRoute('eye-color', value)"
      />
    </div>
  </body-part-layout>
</template>
