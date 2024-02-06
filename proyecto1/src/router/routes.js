const routes = [
  {
    path: "/",
    component: () => import("layouts/LayoutYubal.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Quasar-16.vue"),
      },
      {
        path: "/quasar-11",
        component: () => import("pages/Quasar-11.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
