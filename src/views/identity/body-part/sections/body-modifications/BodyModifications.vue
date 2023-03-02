<script setup>
import { ref } from "vue";
import { useSideBar } from "@/stores/sidebar.js";
import ArrowRight from "@/assets/icons/repeat/arrow-right-light.svg";
import BaseButton from "@/components/common/atoms/base-button/BaseButton.vue";
import CheckboxGroup from "@/components/common/atoms/base-checkbox-group/BaseCheckboxGroup.vue";

const { nextRoute } = useSideBar();
const next = (value) => nextRoute("modifications", value);

defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const tattoos = ref([]);
const piercing = ref([]);
</script>

<template>
  <h3 class="content__title">Body Modifications</h3>

  <div class="content_options content--tattoos">
    <h3>Tattoos</h3>
    <CheckboxGroup
      :options="data['body-modifications'].tattoos"
      @change="(values) => (tattoos = values)"
    />
  </div>

  <div class="content_options content--piercin">
    <h3>Piercing</h3>
    <CheckboxGroup
      :options="data['body-modifications'].piercing"
      @change="(values) => (piercing = values)"
    />
  </div>

  <div class="content_next">
    <base-button
      v-if="tattoos.length || piercing.length"
      :icon="ArrowRight"
      variant="primary"
      @click="next({ tattoos: tattoos, piercing: piercing })"
    >
      Next
    </base-button>
  </div>
</template>

<style lang="scss" scoped>
@import "./BodyModifications.scss";
</style>
