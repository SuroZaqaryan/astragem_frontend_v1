<script setup>
import VOtpInput from "vue3-otp-input";

import BaseButton from "@/components/common/atoms/base-button/BaseButton";

import { usePinCodeStore } from "@/stores/file-upload";
const pinCode = usePinCodeStore();

const props = defineProps({
  file: { type: Object, required: true }, // current file
});
</script>

<template>
  <div class="pincode-form">
    <div class="pincode-form__text">
      <p>This PIN will be for all pictures in</p>
    </div>

    <div class="pincode-form__field">
      <v-otp-input
        ref="pinCode.otpInput"
        input-classes="otp-input"
        separator=""
        :num-inputs="pinCode.numberInputs"
        :should-auto-focus="true"
        :is-input-num="true"
        :conditional-class="['one', 'two', 'three', 'four']"
        :placeholder="['*', '*', '*', '*']"
        @on-change="(e) => (e = pinCode.otpInput = e)"
        @on-complete="(e) => (e = pinCode.pinCodeValue = e)"
      />
    </div>

    <Transition>
      <div class="file-preview__pin-code">
        <div class="file-preview__pin-code__save">
          <base-button
            variant="primary-light"
            :disabled="pinCode.otpInput.length !== pinCode.numberInputs"
            full-width
            @click="pinCode.savePin(props.file)"
          >
            Save
          </base-button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<!-- Input pin code styles -->
<style lang="scss">
@import "./PinForm.scss";
@import "@/assets/scss/_typography";
</style>

<!-- Input pin code styles -->
<style lang="scss">
.otp-input {
  width: 40px;
  height: 40px;
  font-size: 20px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  text-align: center;
}
.otp-input::placeholder {
  font-size: 20px;
}
.otp-input::-webkit-inner-spin-button,
.otp-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input::placeholder {
  font-size: 15px;
  text-align: center;
  font-weight: 600;
}
</style>
