import "./style.css";
import App from "./App.vue";
import { createApp } from "vue";
import { VueQueryPlugin } from "@tanstack/vue-query";
import { queryClient } from "@/app/plugins/TanstackQuery/index.ts";
import { router } from "./router.ts";
import { createPinia } from "pinia";

const pinia = createPinia();

createApp(App)
  .use(VueQueryPlugin, { queryClient })
  .use(router)
  .use(pinia)
  .mount("#app");
