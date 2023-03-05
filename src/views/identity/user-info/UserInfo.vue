<script setup>
import { ref } from "vue";
import BaseInput from "@/components/common/atoms/base-input/BaseInput.vue";
import InputMark from "@/assets/icons/ui-kit/InputMark.svg";
import BaseDropdownCountry from "@/components/common/atoms/base-dropdown-country/BaseDropdownCountry.vue";
import BaseIcon from "@/components/common/atoms/base-icon/BaseIcon.vue";

const userName = ref("");
const userBirthday = ref("");
const userNationality = ref("");
</script>

<template>
  <div class="user-info">
    <form class="user-info__form">
      <div>
        <base-input
          type="text"
          icon="repeat/question-mark.svg"
          v-model="userName"
          placeholder="Vebmag_mateball.io"
          label="Display name"
        />
      </div>

      <div>
        <base-input
          type="text"
          v-model="userBirthday"
          icon="repeat/question-mark.svg"
          placeholder="Vebmag_mateball.io"
          label="Birthday"
        />
      </div>

      <div>
        <div class="user-info__country-text">
          <label><p>Nationality</p></label>
          <base-icon src="repeat/question-mark.svg" />
        </div>
        <base-dropdown-country v-model="userNationality" />
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
@import "UserInfo";
</style>
