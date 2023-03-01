<script setup>
import { useSideBar } from "@/stores/sidebar";
const { isSectionDisabled } = useSideBar();

defineProps({
  title: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <main class="sidebar__content" :class="{ disabled: isSectionDisabled }">
    <h1 class="sidebar__content-title">{{ title }}</h1>

    <div class="sidebar__content-block">
      <slot name="question" />
      <slot />
    </div>
  </main>
</template>

<style lang="scss" scoped>
.sidebar__content {
  flex-basis: 1032px;

  &-title {
    text-align: center;
    @extend .monts_semibold_24;

    @include desktop-large {
      margin-bottom: 1rem;
    }
  }

  &-block {
    position: relative;

    @include flexbox("", "center", "", "column");
    height: calc(100% - 32px);
  }
}

.disabled {
  pointer-events: none;
  opacity: 0.4;
  user-select: none;
}
</style>
