import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/views/dashboard";
import SamplePage from "@/views/SamplePage";
import Food from "@/views/food";

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/samplepage",
    name: "samplepage",
    component: SamplePage,
  },
  {
    path: "/food",
    name: "food",
    component: Food,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
