import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/Home",
    name: "Home",
    component: () =>import(/* webpackChunkName: "about" */ "../views/Home.vue")
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
      import(/* webpackChunkName: "about" */ "../components/Registe/registe.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
