import { createRouter, createWebHistory } from 'vue-router'
import { loggedInUser } from "@/composables/account"
import routes from "@/router/routes"

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const userLoggedIn = loggedInUser()

  if(to.meta.enforceNoLogin && userLoggedIn) return next("/")
  if(to.meta.enforceLogin && !userLoggedIn) return next("/login")
  next()
})

export default router
