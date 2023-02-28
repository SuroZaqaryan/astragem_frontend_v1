<script setup>
import { computed } from "vue";
import { usePinCodeStore } from "@/stores/file-upload";

import BaseSwitch from "@/components/common/atoms/base-switch/BaseSwitch.vue";
import BaseImage from "@/components/common/atoms/base-image/BaseImage.vue";

const pinCode = usePinCodeStore();

const props = defineProps({
  file: { type: Object, required: true }, // current file
  type: { type: String, required: true },
  tag: { type: String, default: "div" },
  modelValue: { type: Boolean, required: true, default: false },
});

const emit = defineEmits(["onInputFileChange", "update:modelValue"]);

const switchValue = computed({
  get() {
    return props.file.switchValue;
  },

  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <component :is="tag" class="file-preview">
    <Transition>
      <slot
        v-if="props.type === 'free' && props.file.isShowPinCode"
        name="PinForm"
      />
    </Transition>

    <div v-show="!props.file.isShowPinCode" class="file-preview__views">
      <div class="file-preview__views__icon">
        <base-image
          width="16"
          height="16"
          src="file-uploader-images/views.svg"
        />

        <span class="file-preview__views__icon__count">3</span>
      </div>

      <input
        :id="`radio-${file.id}`"
        style="display: none"
        type="radio"
        name="radios"
        value="all"
        @change="pinCode.selectMainImage(props.file.id)"
      />

      <template v-if="props.file.isMainImage">
        <div class="file-preview__views__main-image">
          <base-image
            width="30"
            height="30"
            src="file-uploader-images/main-image.svg"
          />
        </div>
      </template>

      <template v-else>
        <label
          :for="`radio-${file.id}`"
          class="file-preview__views__choose-main-image"
        />
      </template>
    </div>

    <div class="file-preview__controls">
      <Transition>
        <slot v-if="props.type === 'private'" name="CurrencyForm" />
      </Transition>

      <button
        v-if="file.pinCodeIsActive"
        class="file-preview__controls__pin-code-text"
      >
        <base-image
          width="16"
          height="16"
          src="file-uploader-images/lock.svg"
        />
        <span>{{ pinCode.pinCodeValue }}</span>
      </button>

      <div class="file-preview__content">
        <div class="file-preview__actions">
          <button class="file-preview__actions__edit">
            <input
              id="file-input"
              style="display: none"
              type="file"
              multiple
              @change="$emit('onInputFileChange', e)"
            />

            <label style="cursor: pointer" for="file-input">
              <base-image
                width="20"
                height="20"
                src="file-uploader-images/edit-image.svg"
              />
            </label>
          </button>

          <button
            class="file-preview__actions__remove"
            @click="pinCode.removeFile(file)"
          >
            <base-image
              width="20"
              height="20"
              src="file-uploader-images/remove-image.svg"
            />
          </button>
        </div>

        <div
          v-if="props.type === 'free'"
          class="file-preview__controls__switch"
        >
          <base-switch
            v-model="switchValue"
            @change="pinCode.handleChangeForm(props.file.id)"
          />
        </div>
      </div>
    </div>

    <img
      :src="file.url"
      :alt="file.file.name"
      class="file-preview__image"
      :title="file.file.name"
    />

    <span
      v-show="file.status === 'loading'"
      class="file-preview__status-indicator loading-indicator"
    >
      In Progress
    </span>

    <span
      v-show="file.status === true"
      class="file-preview__status-indicator success-indicator"
      >Uploaded</span
    >

    <span
      v-show="file.status === false"
      class="file-preview__status-indicator failure-indicator"
      >Error</span
    >
  </component>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/_typography";
@import "./FilePreview.scss";
</style>
