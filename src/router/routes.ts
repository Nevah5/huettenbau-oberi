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
  },
  {
    path: '/account',
    redirect: '/account/overview',
    name: 'account',
    meta: {
      titleName: 'Account',
      enforceLogin: true,
    },
    component: () => import('@/views/AccountView.vue'),
    children: [
      {
        path: 'overview',
        name: 'overview',
        meta: {
          titleName: 'Account',
          enforceLogin: true,
        },
        component: () => import('@/views/account/OverviewView.vue')
      },
      {
        path: 'logout',
        name: 'logout',
        meta: {
          titleName: 'Logging out...',
          enforceLogin: true,
        },
        component: () => import('@/views/account/LogoutView.vue')
      }
    ]
  }
]

export default routes