import {RouteRecordRaw} from "vue-router"

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: "Startseite"
    },
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: "Login",
      isNavSpacerEnabled: false,
      enforceNoLogin: true,
    },
    component: () => import('@/views/LoginView.vue')
  }
]

export default routes