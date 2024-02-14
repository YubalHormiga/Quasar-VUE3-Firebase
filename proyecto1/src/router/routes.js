const routes = [
  {
    path: "/",
    component: () => import("layouts/LayoutYubal.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Seccion-28-DesarrolloAndroid.vue"),
      },
      {
        path: "/inicio",
        component: () => import("pages/IniciadaSesion.vue"),
        meta: {
          requiresAuth: true, // Asegura que solo usuarios autenticados puedan acceder a esta ruta
        },
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
