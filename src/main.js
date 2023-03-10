import { createApp } from "vue";
import { VueQueryPlugin } from "@tanstack/vue-query";
import router from "./router";
import { pinia } from "./stores";
import App from "./App.vue";

import useClickOutside from "./hooks/useClickOutside.js";

const app = createApp(App);

app.directive("click-outside", useClickOutside);
app.use(router);
app.use(pinia);
app.use(VueQueryPlugin);
app.mount("#app");
