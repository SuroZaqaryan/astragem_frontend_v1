<script setup>
import SideBar from "@/components/sidebar/SideBar.vue";
</script>

<template>
  <div class="sidebar-wrapper">
    <aside>
      <side-bar />
    </aside>

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style lang="scss" scoped>
.sidebar-wrapper {
  @include flexbox("", "space-between");
  max-width: 1344px;
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
