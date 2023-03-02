import { defineStore } from "pinia";
import { useRoute } from "vue-router";
import axios from "axios";

export const useSideBar = defineStore("sidebar", {
  state: () => {
    return {
      currentIndex: 0,
      // In this object, we add the value that the user has chosen to send to the server
      sideBarItemsValues: {},

      sideBarItems: [
        {
          title: "Find Your Body",
          link: `general-body`,
          icon: "online_courses.svg",
        },
        {
          title: "Find Your Frame",
          link: `body-frame`,
          icon: "saved-products.svg",
        },
        {
          title: "Find your height",
          link: `body-height`,
          icon: "certificate.svg",
        },
        {
          title: "Find Your Breast Shape",
          link: `breast-shape`,
          icon: "online_courses.svg",
        },
        {
          title: "Find Your Breast Size",
          link: `breast-size`,
          icon: "saved-products.svg",
        },
        {
          title: "Find Nipple Variation",
          link: `nippie-variation`,
          icon: "certificate.svg",
        },
        {
          title: "Find Your Butt Shape",
          link: `butt-shape`,
          icon: "online_courses.svg",
        },
        {
          title: "Find Your Pussy Type",
          link: `pussy-type`,
          icon: "saved-products.svg",
        },
        {
          title: "Find Grooming Style",
          link: `grooming-style`,
          icon: "certificate.svg",
        },
        {
          title: "Body Enhancements",
          link: `body-enhancements`,
          icon: "online_courses.svg",
        },
        {
          title: "Body Modifications",
          link: `body-modifications`,
          icon: "saved-products.svg",
        },
        {
          title: "Hair Lenght",
          link: `hair-length`,
          icon: "certificate.svg",
        },
        {
          title: "Hair Type",
          link: `hair-type`,
          icon: "online_courses.svg",
        },
        {
          title: "Hair Color",
          link: `hair-color`,
          icon: "saved-products.svg",
        },
        {
          title: "Eye Color",
          link: `eye-color`,
          icon: "certificate.svg",
        },
      ],
    };
  },

  actions: {
    async nextRoute(property, value) {
      this.sideBarItemsValues[property] = value;

      if (this.currentIndex !== this.sideBarItems.length - 1) {
        // Get the index of the current route in the array
        this.currentIndex = this.sideBarItems.findIndex(
          (item) =>
            `/identity/${item.link}` === this.router.currentRoute.value.path
        );

        this.currentIndex = Object.keys(this.sideBarItemsValues).length;

        this.router.push(
          `/identity/${this.sideBarItems[this.currentIndex].link}`
        );
      } else {
        // When the user selects all options
        // We successfully send the selected options to the server.
        const res = await axios.post(
          "http://localhost:5000/send-body",
          this.sideBarItemsValues
        );

        if (res.status === 200) alert("Complete");
      }
    },
  },

  getters: {
    /*
      This function (isSectionDisabled) is intended to completely disable the page if 
      the user attempts to manually change the URL in an attempt
      to redirect to a section that has not yet been reached.
    */
    isSectionDisabled(state) {
      const currentRouteIndex = state.sideBarItems.findIndex(
        (item) => `/identity/${item.link}` === useRoute().path
      );
      return currentRouteIndex > state.currentIndex;
    },
  },

  persist: {
    enabled: true,
    strategies: [
      {
        storage: sessionStorage,
        paths: ["sideBarItemsValues", "currentIndex"],
      },
    ],
  },
});
