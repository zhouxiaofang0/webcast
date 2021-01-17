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
    path: "/videoIntro",
    name: "videoIntro",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/page/videoIntro.vue")
  },
  {
    path: "/visitorControl",
    name: "visitorControl",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/page/visitorControl.vue")
  },
  {
    path: "/companyControl",
    name: "companyControl",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/page/companyControl.vue")
  },
  {
    path: "/adminControl",
    name: "adminControl",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/page/adminControl.vue")
  },
  {
    path: "/visitorVideo",
    name: "visitorVideo",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/page/visitorVideo.vue")
  },
  {
    path: "/playbackVideo",
    name: "playbackVideo",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/page/playbackVideo.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
