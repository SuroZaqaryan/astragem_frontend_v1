// Outside click event
const useClickOutside = {
  beforeMount: (el, binding) => {
    el.clickOutsideEvent = (event) => {
      if (!(el == event.target || el.contains(event.target))) {
        binding.value();
      }
    };
    document.addEventListener("click", el.clickOutsideEvent);
    document.body.addEventListener("touchstart", el.clickOutsideEvent);
  },
  mounted: (el, binding) => {
    const modal = document.querySelector(".base-modal-content");
    if (modal) {
      el.clickOutsideEvent = (event) => {
        if (!(el == event.target || el.contains(event.target))) {
          binding.value();
        }
      };
      modal.addEventListener("click", el.clickOutsideEvent);
    }
  },
  unmounted: (el) => {
    document.removeEventListener("click", el.clickOutsideEvent);
    document.body.removeEventListener("touchstart", el.clickOutsideEvent);
    const modal = document.querySelector(".base-modal-content");
    if (modal) {
      modal.removeEventListener("click", el.clickOutsideEvent);
    }
  },
};

export default useClickOutside;
