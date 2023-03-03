<script setup>
import { ref } from "vue";
import { useCountriesApi } from "@/api/hooks/useCountriesApi";
import BaseInput from "@/components/common/atoms/base-input/BaseInput.vue";
import BaseDropdown from "@/components/common/atoms/base-dropdown/BaseDropdown.vue";
import InputMark from "@/assets/icons/ui-kit/InputMark.svg";

const userName = ref("");
const userBirthday = ref("");
const userNationality = ref("");

const { data, pending } = useCountriesApi();
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
        <base-dropdown
          v-if="!pending"
          v-model="userNationality"
          :options="data"
          :placeholder="'Select Item'"
        />
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
@import "UserInfo";
</style>
