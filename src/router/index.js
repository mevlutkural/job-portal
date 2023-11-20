import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  routes: [
    {
      name: "home",
      path: "/",
      component: () => import("../views/Home.vue"),
    },
    {
      name: "dashboard",
      path: "/dashboard",
      component: () => import("../views/dashboard/Dashboard.vue"),
    },
    {
      name: "add",
      path: "/dashboard/add",
      component: () => import("../views/dashboard/Add.vue"),
    },
  ],
  history: createWebHashHistory(),
});

export default router;
