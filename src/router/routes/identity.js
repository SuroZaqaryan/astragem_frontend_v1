export const identity = [
  {
    path: "/identity",
    name: "identity",
    component: () =>
      import(
        /* webpackChunkName: "Identity" */ "../../views/identity/Identity.vue"
      ),

    children: [
      {
        path: "/identity",
        redirect: "identity/general-body",
      },
      {
        path: "general-body",
        name: "GeneralBody",
        component: () =>
          import("../../views/identity/sections/general-body/GeneralBody.vue"),
      },
      {
        path: "body-frame",
        name: "BodyFrame",
        component: () =>
          import("../../views/identity/sections/body-frame/BodyFrame.vue"),
      },
      {
        path: "body-height",
        name: "BodyHeight",
        component: () =>
          import("../../views/identity/sections/body-height/BodyHeight.vue"),
      },
      {
        path: "breast-shape",
        name: "BreastShape",
        component: () =>
          import("../../views/identity/sections/breast-shape/BreastShape.vue"),
      },
      {
        path: "breast-size",
        name: "BreastSize",
        component: () =>
          import("../../views/identity/sections/breast-size/BreastSize.vue"),
      },
      {
        path: "nippie-variation",
        name: "NippieVariation",
        component: () =>
          import(
            "../../views/identity/sections/nippie-variation/NippieVariation.vue"
          ),
      },
      {
        path: "butt-shape",
        name: "ButtShape",
        component: () =>
          import("../../views/identity/sections/butt-shape/ButtShape.vue"),
      },
      {
        path: "pussy-type",
        name: "PussyType",
        component: () =>
          import("../../views/identity/sections/pussy-type/PussyType.vue"),
      },
      {
        path: "grooming-style",
        name: "GroomingStyle",
        component: () =>
          import(
            "../../views/identity/sections/grooming-style/GroomingStyle.vue"
          ),
      },
      {
        path: "enhancements",
        name: "Enhancements",
        component: () =>
          import("../../views/identity/sections/enhancements/Enhancements.vue"),
      },
      {
        path: "modifications",
        name: "Modifications",
        component: () =>
          import(
            "../../views/identity/sections/modifications/Modifications.vue"
          ),
      },
      {
        path: "hair-length",
        name: "HairLength",
        component: () =>
          import("../../views/identity/sections/hair-length/HairLength.vue"),
      },
      {
        path: "hair-type",
        name: "HairType",
        component: () =>
          import("../../views/identity/sections/hair-type/HairType.vue"),
      },
      {
        path: "hair-color",
        name: "HairColor",
        component: () =>
          import("../../views/identity/sections/hair-color/HairColor.vue"),
      },
      {
        path: "eye-color",
        name: "EyeColor",
        component: () =>
          import("../../views/identity/sections/eye-color/EyeColor.vue"),
      },
      // {
      //   path: ":pathMatch(.*)*",
      //   name: "not-found",
      //   redirect: "/general-body",
      // },
    ],
  },
];
