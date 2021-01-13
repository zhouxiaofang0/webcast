import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    // redirect:'/home',
    component: () =>import(/* webpackChunkName: "about" */ "../views/home.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login/index.vue")
  },
  {
    path: "/registe",
    name: "registe",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/registe/index.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
