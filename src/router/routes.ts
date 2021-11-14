import { createRouter, createWebHistory } from "vue-router"

import HelloWorld from "@/components/HelloWorld.vue";
import Table from "@/components/Table.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: { name: "home" },
    },
    {
      path: "/home",
      name: "home",
      component: HelloWorld,
    },
    {
      path: "/table",
      name: "table",
      component: Table,
    },
  ],
})

export default router;
