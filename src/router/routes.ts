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
      title: 'Account',
      enforceLogin: true,
    },
    component: () => import('@/views/AccountView.vue'),
    children: [
      {
        path: 'overview',
        name: 'overview',
        meta: {
          title: 'Account',
          enforceLogin: true,
        },
        component: () => import('@/views/account/OverviewView.vue')
      },
      {
        path: 'settings',
        name: 'settings',
        meta: {
          title: 'Account Settings',
          enforceLogin: true,
        },
        component: () => import('@/views/account/SettingsView.vue')
      },
      {
        path: 'security',
        name: 'security',
        meta: {
          title: 'Account Security',
          enforceLogin: true,
        },
        component: () => import('@/views/account/SecurityView.vue')
      }
    ]
  }
]

export default routes