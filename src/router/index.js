import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import Verify from "../components/VerifyMail.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    props: true,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/verify",
    name: "Verify",
    component: Verify,
    props: true,
  },
  {
    path: "/submit-profile",
    name: "SubmitProfile",
    component: () => import("../views/SubmitProfile.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
