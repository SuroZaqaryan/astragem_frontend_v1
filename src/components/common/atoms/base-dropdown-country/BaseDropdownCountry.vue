<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  options: {
    type: Array,
    required: true,
  },

  modelValue: {
    type: String,
    required: false,
  },
})

const isOpen = ref(false);

const toggleDropdown = () => isOpen.value = !isOpen.value;
const closeDropdown = () => isOpen.value = false;

const selectedCountry = () => {
  closeDropdown();
};

const emit = defineEmits(["update:modelValue", "change"]);

const model = computed({
  get() {
    return props.modelValue;
  },

  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <div class="select-box" v-click-outside="closeDropdown">
    <div :class="{ active: isOpen }" class="options-container">
      <label v-for="(option, idx) in options" :key="idx" class="option">
        <input
          type="radio"
          class="radio"
          :id="option.name"
          :name="option.name"
          v-model="model"
          :value="option.name"
          @change="selectedCountry($event)"
        />
        <span :for="option.name">{{ option.name }}</span>
      </label>
    </div>

    <div  @click="toggleDropdown" class="selected">Select Video Category</div>
  </div>
</template>

<style scoped>
body {
  background: gray;
}
.select-box {
  position: relative;
  display: flex;
  width: 273px;
  flex-direction: column;
}

.select-box .options-container {
  position: absolute;
  top: 3.5rem;
  z-index: 1;
  background: #2f3640;
  color: #f5f6fa;
  max-height: 0;
  width: 100%;
  opacity: 0;
  transition: all 0.4s;
  border-radius: 8px;
  overflow: hidden;
  order: 1;
}

.selected {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 48px;
  padding: 12px;
  background: #2f3640;
  border-radius: 5px;
  color: #f5f6fa;
  order: 0;
}

.selected::after {
  content: "";
  background: url("https://img.icons8.com/material-outlined/1x/long-arrow-up.png");
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 32px;
  right: 10px;
  top: 5px;
  transition: all 0.4s;
}

.select-box .options-container.active {
  max-height: 240px;
  opacity: 1;
  overflow-y: scroll;
}

.select-box .options-container.active + .selected::after {
  transform: rotateX(180deg);
  top: -6px;
}

.select-box .options-container::-webkit-scrollbar {
  width: 8px;
  background: #0d141f;
  border-radius: 0 8px 8px 0;
}

.select-box .options-container::-webkit-scrollbar-thumb {
  background: #525861;
  border-radius: 5px;
}

.select-box,
.selected {
  cursor: pointer;
}

.select-box .option:hover {
  background: #414b57;
}

.select-box label {
  cursor: pointer;
}

.select-box .option .radio {
  display: none;
}

.select-box .option {
  display: block;
  padding: 12px;
}
</style>
