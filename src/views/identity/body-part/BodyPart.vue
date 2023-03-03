<script setup>
import SideBar from "@/components/sidebar/SideBar.vue";
import BodyPartLayout from "@/layouts/body-part-layout/BodyPartLayout.vue";
import { useBodyPart } from "@/api/hooks/useBodyPart";

const { data, pending } = useBodyPart();
</script>

<template>
  <div class="sidebar-wrapper">
    <aside>
      <side-bar />
    </aside>

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <body-part-layout v-if="!pending">
          <component :data="data" :is="Component" />
        </body-part-layout>
      </transition>
    </router-view>
  </div>
</template>

<style lang="scss" scoped>
.sidebar-wrapper {
  @include flexbox("", "space-between");
  margin: auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
