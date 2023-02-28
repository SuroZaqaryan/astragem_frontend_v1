import { createRouter, createWebHistory } from "vue-router";

import { home } from "./routes/home";
import { uiKit } from "./routes/uiKit";
import { identity } from "./routes/identity";

const routes = [...home, ...uiKit, ...identity];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
