<script setup>
import { computed, ref } from "vue";
import countriesList from "/src/static/countries.json";
import BaseIcon from "@/components/common/atoms/base-icon/BaseIcon.vue";

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});

const isOpen = ref(false);
const countries = ref(countriesList);
const countryFlag = ref("");

const emit = defineEmits(["update:modelValue", "change"]);

const handleChange = (flag) => (countryFlag.value = flag);

const model = computed({
  get() {
    return props.modelValue;
  },

  set(value) {
    isOpen.value = false;
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <div class="dropdown-country">
    <div
      class="dropdown-country__select-box"
      :class="{ 'dropdown-open': isOpen }"
      v-click-outside="() => (isOpen = false)"
    >
      <div class="dropdown-country__options">
        <label v-for="country in countries" :key="country.name" class="option">
          <input
            type="radio"
            class="radio"
            @change="handleChange(country.flag)"
            :id="country.name"
            :name="country.name"
            v-model="model"
            :value="country.name"
          />
          <span :for="country.name">{{ country.name }}</span>
        </label>
      </div>

      <div @click="isOpen = !isOpen" class="dropdown-country__selected">
        <span>{{ !model.length ? "Select Country" : model }}</span>
        <base-icon src="repeat/arrow-down.svg" />
      </div>
    </div>

    <div class="dropdown-country__flag-box">
      <img width="24" height="24" :src="countryFlag" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dropdown-country {
  @include flexbox("center", "center");

  &__select-box {
    position: relative;
    display: flex;
    width: 273px;
    flex-direction: column;
  }

  &__select-box &__options {
    position: absolute;
    top: 3.5rem;
    z-index: 1;
    background: #fafafa;
    border: 1px solid rgba(216, 216, 216, 0.5);
    color: #1c1c1c;
    max-height: 0;
    width: 100%;
    opacity: 0;
    transition: all 0.2s;
    border-radius: 8px;
    overflow: hidden;
    order: 1;
  }
  .dropdown-open &__selected .base-icon {
    transform: rotateX(180deg);
    -webkit-transform: rotateX(180deg);
  }

  &__selected {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @extend .monts_reg_16;
    line-height: 0;
    min-height: 48px;
    padding: 12px;
    background: #fafafa;
    border: 1px solid rgba(216, 216, 216, 0.5);
    border-radius: 5px;
    user-select: none;
    cursor: pointer;
    color: #232323;
    order: 0;
  }

  .dropdown-open &__options {
    max-height: 240px;
    opacity: 1;
    overflow-y: scroll;
  }

  &__select-box &__options::-webkit-scrollbar {
    width: 8px;
    background: rgba(0, 0, 0, 0.05);
  }

  &__select-box &__options::-webkit-scrollbar-thumb {
    background: #5151518a;
  }
  &__select-box .option .radio {
    display: none;
  }
  &__select-box .option {
    display: block;
    padding: 12px;
    cursor: pointer;
    @extend .monts_reg_14;
    transition: 0.2s;

    &:hover {
      background: #f6f6f6;
    }
  }

  &__flag-box {
    height: auto;
    img {
      height: 100%;
    }
  }
}
</style>
