import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    meta: {
      title: "Startseite",
    },
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/login",
    name: "login",
    meta: {
      title: "Login",
      enforceNoLogin: true,
    },
    component: () => import("@/views/LoginView.vue"),
  },
  {
    path: "/nopermissions",
    name: "nopermissions",
    meta: {
      title: "Keinen Zugriff",
    },
    component: () => import("@/views/NoPermissionsView.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    meta: {
      title: "Admin Panel",
      enforceLogin: true,
    },
    redirect: "/admin/welcome",
    component: () => import("@/views/AdminView.vue"),
    children: [
      {
        path: "welcome",
        name: "welcome",
        meta: {
          title: "Admin Panel",
          enforceLogin: true,
        },
        component: () => import("@/views/admin/WelcomeInfo.vue"),
      },
      {
        path: "groups",
        name: "groups",
        meta: {
          title: "Gruppen Verwaltung",
          enforceLogin: true,
        },
        component: () => import("@/views/admin/GroupManagment.vue"),
      },
      {
        path: "navigation",
        name: "navigation",
        meta: {
          title: "Site Navigation",
          enforceLogin: true,
        },
        component: () => import("@/views/admin/SiteNavigation.vue"),
      },
      {
        path: "gallery-managment",
        name: "gallery-managment",
        meta: {
          title: "Galerie Administration",
          enforceLogin: true,
        },
        component: () => import("@/views/admin/GalleryAdministration.vue"),
      },
      {
        path: "external-links",
        name: "external-links",
        meta: {
          title: "Externe Links",
          enforceLogin: true,
        },
        component: () => import("@/views/admin/ExternalLinks.vue"),
      },
    ],
  },
  {
    path: "/account",
    name: "account",
    redirect: "/account/overview",
    meta: {
      title: "Account",
      enforceLogin: true,
    },
    component: () => import("@/views/AccountView.vue"),
    children: [
      {
        path: "overview",
        name: "overview",
        meta: {
          title: "Account",
          enforceLogin: true,
        },
        component: () => import("@/views/account/OverviewView.vue"),
      },
      {
        path: "settings",
        name: "settings",
        meta: {
          title: "Account Settings",
          enforceLogin: true,
        },
        component: () => import("@/views/account/SettingsView.vue"),
      },
      {
        path: "security",
        name: "security",
        meta: {
          title: "Account Security",
          enforceLogin: true,
        },
        component: () => import("@/views/account/SecurityView.vue"),
      },
    ],
  },
  {
    path: "/link",
    name: "link",
    meta: {
      title: "Externer Link",
    },
    component: () => import("@/views/ExternalLink.vue"),
  },
  {
    path: "/gallery/:id",
    name: "gallery",
    meta: {
      title: "Galerie",
    },
    component: () => import("@/views/GalleryView.vue"),
  },
];

export default routes;
