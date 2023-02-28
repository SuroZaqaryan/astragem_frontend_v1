import { defineStore } from "pinia";

export const usePinCodeStore = defineStore("counter", {
  state: () => {
    return {
      files: [],
      pinCodeValue: "",
      otpInput: "",
      numberInputs: 4, // Number of pin codes,
    };
  },

  actions: {
    savePin(currentFile) {
      this.files.filter((file) => {
        if (file.id === currentFile.id) file.pinCodeIsActive = true;
      });
      currentFile.switchValue = true;
      currentFile.isShowPinCode = false;
    },

    selectMainImage(fileId) {
      this.files.filter((file) => {
        if (file.id === fileId) file.isMainImage = true;
        else file.isMainImage = false;
      });
    },

    handleChangeForm(fileId) {
      const hasActivePinCode = this.files.some(
        (x) => x.pinCodeIsActive === true
      );

      this.files.filter((file) => {
        const matchId = file.id === fileId;
        const unMatchId = file.id !== fileId;

        if (matchId && !hasActivePinCode) {
          file.isShowPinCode = !file.isShowPinCode;
        } else {
          file.isShowPinCode = false;
          file.switchValue = false;
        }

        if (unMatchId && file.pinCodeIsActive) {
          file.switchValue = true;
        }

        if (matchId && file.pinCodeIsActive) {
          file.switchValue = !file.switchValue;
        }

        if (matchId && hasActivePinCode) {
          file.switchValue = !file.switchValue;
        }

        if (matchId && hasActivePinCode) {
          file.pinCodeIsActive = !file.pinCodeIsActive;
        }

        if (!file.isShowPinCode) this.otpInput = "";
      });
    },

    // Upload files

    async uploadFile(file, type) {
      // set up the request data
      let formData = new FormData();

      if (type === "free") {
        formData.append("file", file.file);
        formData.append("pinCodeIsActive", file.pinCodeIsActive);
        formData.append("mainImage", file.isMainImage);
      }

      if (type === "private") {
        formData.append("currency", file.currencyValue);
        formData.append("mainImage", file.isMainImage);
      }

      // track status and upload file
      file.status = "loading";
      let response = await fetch("upload-files", {
        method: "POST",
        body: formData,
      });

      // change status to indicate the success of the upload request
      file.status = response.ok;

      return response;
    },

    uploadFiles(files, type) {
      return Promise.all(files.map((file) => this.uploadFile(file, type)));
    },

    createUploader() {
      return {
        uploadFile: function (file) {
          return this.uploadFile(file);
        },
        uploadFiles: function (files) {
          return this.uploadFiles(files);
        },
      };
    },

    // Remove file

    removeFile(file) {
      const index = this.files.indexOf(file);
      if (index > -1) this.files.splice(index, 1);
    },
  },
});
