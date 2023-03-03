<script setup>
import { ref } from "vue";
import BaseInput from "@/components/common/atoms/base-input/BaseInput.vue";
import InputMark from "@/assets/icons/ui-kit/InputMark.svg";
import BaseDropdownCountry from "@/components/common/atoms/base-dropdown-country/BaseDropdownCountry.vue";

const userName = ref("");
const userBirthday = ref("");
const userNationality = ref("");

const countries = ref([{ name: "USA" }, { name: "China" }, { name: "Russia" }]);
</script>

<template>
  <div class="user-info">
    <form class="user-info__form">
      <div>
        <base-input
          type="text"
          :icon="InputMark"
          v-model="userName"
          placeholder="Vebmag_mateball.io"
          label="Display name"
        />
      </div>

      <div>
        <base-input
          type="text"
          v-model="userBirthday"
          :icon="InputMark"
          placeholder="Vebmag_mateball.io"
          label="Birthday"
        />
      </div>

      <div>
        <base-dropdown-country v-model="userNationality" :options="countries" />
        <h3>{{ userNationality }}</h3>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
@import "UserInfo";
</style>
