<script setup>
import BodyPart from "./body-part/BodyPart.vue";
import UserInfo from "./user-info/UserInfo.vue";
</script>

<template>
  <div class="identity-wrapper">
    <user-info />
    <body-part />
  </div>
</template>

<style lang="scss" scoped>
.identity-wrapper {
  max-width: 1440px;
  margin: auto;
  padding: 48px;
}
</style>
