import { createRouter, createWebHistory } from "vue-router";

import { home } from "./routes/home";
import { uiKit } from "./routes/uiKit";
import { bodyPart } from "./routes/bodyPart";

const routes = [...home, ...uiKit, ...bodyPart];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
