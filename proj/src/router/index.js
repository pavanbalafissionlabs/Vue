import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/home",
    name: "Homes",

    component: () =>
      import(/* webpackChunkName: "Homes" */ "../views/Homes.vue"),
  },
  {
    path: "/dashboard",
    name: "DASHBoard",

    component: () =>
      import(/* webpackChunkName: "Homes" */ "../views/DASHBoard.vue"),
  },

  {
    path: "/re",
    name: "re",

    component: () =>
      import(/* webpackChunkName: "re" */ "../views/registeruser.vue"),
  },
  {
    path: "/user",
    name: "user",

    component: () => import(/* webpackChunkName: "re" */ "../views/user.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
