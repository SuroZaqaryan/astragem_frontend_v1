export const identity = [
  {
    path: "/identity",
    name: "identity",
    component: () =>
      import(
        /* webpackChunkName: "Identity" */ "@/views/identity/IdentityPage.vue"
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
          import(
            /* webpackChunkName: "GeneralBody" */ "@/views/identity/body-part/sections/general-body/GeneralBody.vue"
          ),
      },
      {
        path: "body-frame",
        name: "BodyFrame",
        component: () =>
          import(
            /* webpackChunkName: "BodyFrame" */ "@/views/identity/body-part/sections/body-frame/BodyFrame.vue"
          ),
      },
      {
        path: "body-height",
        name: "BodyHeight",
        component: () =>
          import(
            /* webpackChunkName: "BodyHeight" */ "@/views/identity/body-part/sections/body-height/BodyHeight.vue"
          ),
      },
      {
        path: "breast-shape",
        name: "BreastShape",
        component: () =>
          import(
            /* webpackChunkName: "BreastShape" */ "@/views/identity/body-part/sections/breast-shape/BreastShape.vue"
          ),
      },
      {
        path: "breast-size",
        name: "BreastSize",
        component: () =>
          import(
            /* webpackChunkName: "BreastSize" */ "@/views/identity/body-part/sections/breast-size/BreastSize.vue"
          ),
      },
      {
        path: "nippie-variation",
        name: "NippieVariation",
        component: () =>
          import(
            /* webpackChunkName: "NippieVariation" */ "@/views/identity/body-part/sections/nippie-variation/NippieVariation.vue"
          ),
      },
      {
        path: "butt-shape",
        name: "ButtShape",
        component: () =>
          import(
            /* webpackChunkName: "ButtShape" */ "@/views/identity/body-part/sections/butt-shape/ButtShape.vue"
          ),
      },
      {
        path: "pussy-type",
        name: "PussyType",
        component: () =>
          import(
            /* webpackChunkName: "PussyType" */ "@/views/identity/body-part/sections/pussy-type/PussyType.vue"
          ),
      },
      {
        path: "grooming-style",
        name: "GroomingStyle",
        component: () =>
          import(
            /* webpackChunkName: "GroomingStyle" */ "@/views/identity/body-part/sections/grooming-style/GroomingStyle.vue"
          ),
      },
      {
        path: "body-enhancements",
        name: "BodyEnhancements",
        component: () =>
          import(
            /* webpackChunkName: "BodyEnhancements" */ "@/views/identity/body-part/sections/body-enhancements/BodyEnhancements.vue"
          ),
      },
      {
        path: "body-modifications",
        name: "Modifications",
        component: () =>
          import(
            /* webpackChunkName: "Modifications" */ "@/views/identity/body-part/sections/body-modifications/BodyModifications.vue"
          ),
      },
      {
        path: "hair-length",
        name: "HairLength",
        component: () =>
          import(
            /* webpackChunkName: "HairLength" */ "@/views/identity/body-part/sections/hair-length/HairLength.vue"
          ),
      },
      {
        path: "hair-type",
        name: "HairType",
        component: () =>
          import(
            /* webpackChunkName: "HairType" */ "@/views/identity/body-part/sections/hair-type/HairType.vue"
          ),
      },
      {
        path: "hair-color",
        name: "HairColor",
        component: () =>
          import(
            /* webpackChunkName: "HairColor" */ "@/views/identity/body-part/sections/hair-color/HairColor.vue"
          ),
      },
      {
        path: "eye-color",
        name: "EyeColor",
        component: () =>
          import(
            /* webpackChunkName: "EyeColor" */ "@/views/identity/body-part/sections/eye-color/EyeColor.vue"
          ),
      },
    ],
  },
];
