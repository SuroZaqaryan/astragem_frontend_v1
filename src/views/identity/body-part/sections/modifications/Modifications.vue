<script setup>
import { ref } from "vue";
import { useSideBar } from "@/stores/sidebar.js";
import { BaseQuery } from "@/service/base-query.js";
import ArrowRight from "@/assets/icons/repeat/arrow-right-light.svg";
import IdentityLayout from "@/layouts/identity-layout/IdentityLayout.vue";
import BaseButton from "@/components/common/atoms/base-button/BaseButton.vue";
import CheckboxGroup from "@/components/common/atoms/base-checkbox-group/BaseCheckboxGroup.vue";

const { nextRoute } = useSideBar();
const { isLoading, data } = BaseQuery()({ endpoint: "modifications" });

const tattoos = ref([]);
const piercing = ref([]);
</script>

<template>
  <identity-layout v-if="!isLoading" title="Body Modifications">
    <div class="content_options">
      <h3>Tattoos</h3>
      <CheckboxGroup
        :options="data.tattoos"
        @change="(values) => (tattoos = values)"
      />
    </div>

    <div class="content_options">
      <h3>Piercing</h3>
      <CheckboxGroup
        :options="data.piercing"
        @change="(values) => (piercing = values)"
      />
    </div>

    <div class="content_next">
      <base-button
        v-if="tattoos.length || piercing.length"
        :icon="ArrowRight"
        variant="primary"
        @click="
          nextRoute('modifications', { tattoos: tattoos, piercing: piercing })
        "
      >
        Next
      </base-button>
    </div>
  </identity-layout>
</template>

<style lang="scss" scoped>
@import "Modifications.";
</style>
