import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import List from "../views/ListPage.vue";

const routes = [
  {
    path: "/home",
    name: "home",
    component: HomePage,
  },
  {
    path: "/list",
    name: "list",
    component: List,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/home",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
