export const home = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "Home" */ "@/views/home/HomePage.vue"),
  },
];
