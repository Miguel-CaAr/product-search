import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/search/:name",
      name: "search",
      component: () => import("../views/SearchView.vue"),
    },
    {
      path: "/product/:id",
      name: "product",
      component: () => import("../views/ProductView.vue"),
    },
  ],
});

export default router;
