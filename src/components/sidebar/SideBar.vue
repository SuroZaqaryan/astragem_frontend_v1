<script setup>
import { useSideBar } from "@/stores/sidebar";
const sidebar = useSideBar();
</script>

<template>
  <nav class="sidebar">
    <ul>
      <li
        v-for="(item, idx) in sidebar.sideBarItems"
        :key="idx"
        class="sidebar__item"
      >
        <router-link
          :to="`/identity/${item.link}`"
          class="sidebar__link"
          :disabled="idx > sidebar.currentIndex"
          :class="{ disabled: idx > sidebar.currentIndex }"
        >
          {{ item.title }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@import "./SideBar.scss";
</style>
