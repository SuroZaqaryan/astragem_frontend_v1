export const uiKit = [
  {
    path: "/ui-kit",
    name: "uiKit",
    component: () =>
      import(/* webpackChunkName: "Home" */ "@/views/ui-kit/UiKit.vue"),
  },
];
