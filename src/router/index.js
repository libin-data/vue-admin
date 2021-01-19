import Vue from "vue";
import VueRouter from "vue-router";
// import Login from "../views/login/login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: 'login'
  },
  {
    path: "/login",
    name: "Login",
    component: () => import('../views/login/login.vue')
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
