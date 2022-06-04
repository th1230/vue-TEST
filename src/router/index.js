import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import List from "../views/ListPage.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    meta: {
      title: "home",
    },
    component: HomePage,
  },
  {
    path: "/list",
    name: "list",
    meta: {
      title: "list",
    },
    component: List,
  },
  {
    path: "/404",
    name: "404",
    component: () => import("../views/404ErrorPage.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.afterEach((to, from, failure) => {
  if (to.meta?.title) {
    document.title = to.meta.title;
  }
});
export default router;
