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
      enforceNoLogin: true,
    },
    component: () => import('@/views/LoginView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    meta: {
      title: "Admin Panel",
      enforceLogin: true,
    },
    component: () => import('@/views/AdminView.vue'),
    children: [
      {
        path: 'permissions',
        name: 'permissions',
        meta: {
          title: 'Site Permissions',
          enforceLogin: true,
        },
        component: () => import('@/views/admin/SitePermissions.vue')
      },
      {
        path: 'navigation',
        name: 'navigation',
        meta: {
          title: 'Site Navigation',
          enforceLogin: true,
        },
        component: () => import('@/views/admin/SiteNavigation.vue')
      },
      {
        path: 'gallery',
        name: 'gallery',
        meta: {
          title: 'Gallery Administration',
          enforceLogin: true,
        },
        component: () => import('@/views/admin/SiteNavigation.vue')
      },
      {
        path: 'external-links',
        name: 'external-links',
        meta: {
          title: 'Externe Links',
          enforceLogin: true,
        },
        component: () => import('@/views/admin/ExternalLinks.vue')
      },
    ]
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