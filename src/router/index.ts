import { createRouter, createWebHistory } from 'vue-router'
import { loggedInUser } from "@/composables/account"
import routes from "@/router/routes"

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.meta.enforceNoLogin && loggedInUser()) return next("/");
  next();
})

export default router
