import { createRouter, createWebHistory } from "vue-router";

import Login from "../pages/login.vue";
import SignUp from "../pages/signup.vue";
// import Index from "@/pages/index.vue";
// import Dashboard from "../pages/dashboard.vue";
// import Profile from "../pages/Profile.vue";

const routes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/signup",
    component: SignUp,
   },
  // {
  //   path: "/",
  //   component: Index,
  // },
//   {
//     path: "/profile",
//     component: Profile,
//   },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;