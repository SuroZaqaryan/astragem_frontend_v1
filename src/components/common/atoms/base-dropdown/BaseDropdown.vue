<script>
export default {
  name: "BaseDropdown",

  props: {
    options: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
      required: false,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    placeholder: {
      type: [Number, String],
      default: "Select",
    },
    disabled: {
      type: Boolean,
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    mode: {
      type: String,
      default: "light",
    },
    flip: {
      type: Boolean,
      default: true,
    },
    error: {
      type: String,
      default: "",
    },
  },

  emits: ["update:modelValue"],

  setup(props, { emit }) {
    const handleSelect = (val) => {
      emit("update:modelValue", val);
    };
    return {
      handleSelect,
    };
  },

  data() {
    return {
      open: false,
      dropdownDirection: "",
    };
  },

  computed: {
    selected() {
      let value = this.modelValue;
      return value ? this.options.find((i) => i.key == value) : null;
    },

    showActiveHolder() {
      return this.selected && !this.$slots.default
        ? this.selected.value
        : this.selected && this.$slots.default
        ? this.placeholder
        : "";
    },
  },

  methods: {
    openDropdown() {
      const initialDropdownHeight = this.options.length * 40;
      if (!this.disabled) this.open = !this.open;
      if (this.open) {
        const selectTop = this.$refs.dropdown.getBoundingClientRect().top;
        const dropdownHeight =
          initialDropdownHeight > 200 ? initialDropdownHeight : 200;
        if (this.flip) {
          if (window.innerHeight - selectTop < dropdownHeight + 60)
            this.dropdownDirection = `top: auto; bottom: 48px`;
          else this.dropdownDirection = `top: 48px`;
        } else this.dropdownDirection = `top: 48px`;
      }
    },

    closeDropdown() {
      this.open = false;
    },

    select(option) {
      this.handleSelect(option.key);
      this.closeDropdown();
    },
  },
};
</script>

<template>
  <div ref="dropdown" v-click-outside="closeDropdown" class="base-dropdown">
    <span v-if="label" class="base-dropdown-label" :class="`${mode}`">
      {{ label }}
    </span>
    <div
      class="base-dropdown-selected"
      :class="[{ open, disabled }, `${mode}`]"
      @click="openDropdown"
    >
      <slot name="icon-left" />
      <slot />
      <!-- <base-icon-svg
        v-if="selected && selected.icon"
        :icon-path="selected.icon"
      /> -->
      <div class="base-dropdown__selected-item">
        {{ showActiveHolder }}
      </div>
      <span v-if="!selected">
        {{ placeholder }}
      </span>
    </div>
    <div v-if="error" class="base-dropdown-error">{{ error }}</div>
    <div
      v-if="!disabled"
      class="base-dropdown-items"
      :class="[{ open }, `${mode}`]"
      :style="dropdownDirection"
    >
      <div
        v-for="(option, i) of options"
        :key="`${option.key}_${i}`"
        @click="select(option)"
      >
        <!-- <base-icon-svg v-if="option.icon" :icon-path="option.icon" /> -->
        {{ option.value }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./BaseDropdown";
</style>
