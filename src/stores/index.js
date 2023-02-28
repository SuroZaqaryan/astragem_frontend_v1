import { markRaw } from "vue";
import { createPinia } from "pinia";
import piniaPersist from "pinia-plugin-persist";
import router from "../router/index";

export const pinia = createPinia();
pinia.use(piniaPersist);

pinia.use(({ store }) => (store.router = markRaw(router)));
