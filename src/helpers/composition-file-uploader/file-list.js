import { usePinCodeStore } from "@/stores/file-upload";
const pinCode = usePinCodeStore();

export default function () {
  function addFiles(newFiles) {
    let newUploadableFiles = [...newFiles]
      .map((file) => new UploadableFile(file))
      .filter((file) => !fileExists(file.id));
    pinCode.files = pinCode.files.concat(newUploadableFiles);
  }

  function fileExists(otherId) {
    return pinCode.files.some(({ id }) => id === otherId);
  }

  return { addFiles };
}

class UploadableFile {
  constructor(file) {
    this.file = file;
    this.id = `${file.name}-${file.size}-${file.lastModified}-${file.type}`;
    this.url = URL.createObjectURL(file);
    this.status = null;
    this.isShowPinCode = false; // show or hide form pin code
    this.switchValue = false; // switch value (hide or show)
    this.pinCodeIsActive = false; // activate pin code
    this.isMainImage = false; // select main image
    this.currencyValue = "";
  }
}
