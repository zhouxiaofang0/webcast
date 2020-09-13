import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: "login"
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login/index.vue")
  },
  {
    path: "/registe",
    name: "registe",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Registe/registe.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
