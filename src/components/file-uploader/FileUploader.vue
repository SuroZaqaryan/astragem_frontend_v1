<script setup>
import { usePinCodeStore } from "@/stores/file-upload";

// File Management
import useFileList from "@/helpers/composition-file-uploader/file-list";

// Pin Code
import PinForm from "./file-forms/pin-code/pin-form/PinForm.vue";
import DropZone from "./file-forms/pin-code/drop-zone/DropZone.vue";
import FilePreview from "./file-forms/FilePreview.vue";

// Currency
import CurrencyForm from "./file-forms/currency/CurrencyForm.vue";

import BaseButton from "@/components/common/atoms/base-button/BaseButton";
import BaseImage from "@/components/common/atoms/base-image/BaseImage.vue";

const pinCode = usePinCodeStore();

const { addFiles } = useFileList();

const props = defineProps({
  type: {
    type: String,
    default: "free",
    required: true,
  },
});

function onInputFileChange(e) {
  addFiles(e.target.files);

  // Reset so that selecting the same file again will still cause it to fire this change
  e.target.value = null;
}
</script>

<template>
  <div class="file-uploader-wrapper">
    <DropZone v-slot="{ dropZoneActive }" @files-dropped="addFiles">
      <label for="file-input" class="file-upload">
        <div class="file-upload__upload">
          <div class="file-upload__drop-area">
            <div class="file-upload__envelope">
              <span
                v-if="dropZoneActive"
                class="file-upload__drop-zone--active"
              >
                <base-image
                  width="48"
                  height="48"
                  src="file-uploader-images/image-uploader.svg"
                />
                <span
                  >Drop Them here <br />
                  to start uploading</span
                >
              </span>

              <span v-else class="file-upload__drop-zone--expectation">
                <base-image
                  width="48"
                  height="48"
                  src="file-uploader-images/image-uploader.svg"
                />
                <span
                  >Drop Them here <br />
                  to start uploading</span
                >
              </span>

              <input
                id="file-input"
                type="file"
                multiple
                @change="onInputFileChange"
              />
            </div>
          </div>
        </div>
      </label>
    </DropZone>

    <FilePreview
      v-for="file of pinCode.files"
      :key="file.id"
      v-model="file.switchValue"
      v-show="pinCode.files.length"
      :file="file"
      :type="props.type"
      tag="div"
      @on-input-change="onInputFileChange"
    >
      <template #PinForm>
        <PinForm :file="file" />
      </template>

      <template #CurrencyForm>
        <CurrencyForm
          :file="file"
          @update:file-currency="
            (file, currentCurrency) => {
              file.currencyValue = currentCurrency;
            }
          "
        />
      </template>
    </FilePreview>
  </div>

  <base-button
    variant="primary"
    style="margin-top: 2rem"
    @click.prevent="pinCode.uploadFiles(pinCode.files, type)"
    >Upload files</base-button
  >
</template>

<style lang="scss" scoped>
@import "./FileUploader";
</style>
