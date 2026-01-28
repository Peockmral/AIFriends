import { createRouter, createWebHistory } from 'vue-router'
import HomepageIndex from "@/views/homepage/HomepageIndex.vue";
import FriendsIndex from "@/views/friend/FriendsIndex.vue";
import CreateIndex from "@/views/create/CreateIndex.vue";
import LoginIndex from "@/views/user/account/LoginIndex.vue";
import RegisterIndex from "@/views/user/account/RegisterIndex.vue";
import SpaceIndex from "@/views/user/space/SpaceIndex.vue";
import ProfileIndex from "@/views/profile/ProfileIndex.vue";
import NotFoundIndex from "@/views/error/NotFoundIndex.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomepageIndex,
      name: "homepage-index",
    },
    {
      path: "/friends/",
      component: FriendsIndex,
      name: "friends-index",
    },
    {
      path: "/create/",
      component: CreateIndex,
      name: "create-index",
    },
    {
      path: "/user/account/login/",
      component: LoginIndex,
      name: "user-account-login-index",
    },
    {
      path: "/user/account/register/",
      component: RegisterIndex,
      name: "user-account-register-index",
    },
    {
      path: "/user/space/:user_id/",
      component: SpaceIndex,
      name: "user-space-index",
    },
    {
      path: "/profile/",
      component: ProfileIndex,
      name: "profile-index",
    },
    {
      path: "/notFound",
      component: NotFoundIndex,
      name: "notFound-index",
    },
    {
      path: "/:pathMatch(.*)*",
      component: NotFoundIndex,
      name: "notFound-index",
    },
  ],
})

export default router
