import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: false,
  },

  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true,
  },

  {
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("@/views/home/index"),
        meta: { title: "个人主页", icon: "首页" },
      },
    ],
  },

  // {
  //   path: "/",
  //   component: Layout,
  //   redirect: "/example/table",
  //   name: "Example",
  //   meta: { title: "成绩", icon: "成绩单" },
  //   children: [
  //     {
  //       path: "table",
  //       name: "Table",
  //       component: () => import("@/views/table/index"),
  //       meta: { title: "Table", icon: "table" },
  //     },
  //     {
  //       path: "tree",
  //       name: "Tree",
  //       component: () => import("@/views/tree/index"),
  //       meta: { title: "Tree", icon: "tree" },
  //     },
  //   ],
  // },
  {
    path: "/score",
    component: Layout,
    redirect: "/score/finish",
    name: "score",
    meta: { title: "成绩", icon: "成绩单" },
    children: [
      {
        path: "/score/finish",
        name: "finish",
        component: () => import("@/views/score/list/index"),
        meta: {
          title: "列表",
          icon: "列表",
        },
      },
      {
        path: "/score/unfinish",
        name: "unfinish",
        component: () => import("@/views/score/query/index"),
        meta: {
          title: "查询",
          icon: "查询",
        },
      },
    ],
  },

  // {
  //   path: "/form",
  //   component: Layout,
  //   children: [
  //     {
  //       path: "index",
  //       name: "Form",
  //       component: () => import("@/views/form/index"),
  //       meta: { title: "荣誉", icon: "奖杯" },
  //     },
  //   ],
  // },
  {
    path: "/honor",
    component: Layout,
    redirect: "/honor/list",
    name: "honor",
    meta: {
      title: "荣誉",
      icon: "奖杯",
    },
    children: [
      {
        path: "/honor/list",
        name: "list",
        component: () => import("@/views/honor/list/index"),
        meta: { title: "列表", icon: "列表" },
      },
      {
        path: "/honor/input",
        name: "input",
        component: () => import("@/views/honor/input/index"),
        meta: { title: "录入", icon: "录入" },
      },
    ],
  },

  {
    path: "/poll",
    component: Layout,
    redirect: "/poll/finish",
    name: "poll",
    meta: {
      title: "问卷",
      icon: "作业本",
    },
    children: [
      {
        path: "/poll/finish",
        component: () => import("@/views/poll/finish/index"), // Parent router-view
        name: "finish",
        meta: { title: "已完成", icon: "已完成" },
        // children: [
        //   {
        //     path: "menu1-1",
        //     component: () => import("@/views/nested/menu1/menu1-1"),
        //     name: "Menu1-1",
        //     meta: { title: "Menu1-1" },
        //   },
        //   {
        //     path: "menu1-2",
        //     component: () => import("@/views/nested/menu1/menu1-2"),
        //     name: "Menu1-2",
        //     meta: { title: "Menu1-2" },
        //     children: [
        //       {
        //         path: "menu1-2-1",
        //         component: () =>
        //           import("@/views/nested/menu1/menu1-2/menu1-2-1"),
        //         name: "Menu1-2-1",
        //         meta: { title: "Menu1-2-1" },
        //       },
        //       {
        //         path: "menu1-2-2",
        //         component: () =>
        //           import("@/views/nested/menu1/menu1-2/menu1-2-2"),
        //         name: "Menu1-2-2",
        //         meta: { title: "Menu1-2-2" },
        //       },
        //     ],
        //   },
        //   {
        //     path: "menu1-3",
        //     component: () => import("@/views/nested/menu1/menu1-3"),
        //     name: "Menu1-3",
        //     meta: { title: "Menu1-3" },
        //   },
        // ],
      },
      {
        path: "/poll/unfinish",
        component: () => import("@/views/poll/unfinish/index"),
        name: "unfinish",
        meta: { title: "未完成", icon: "未完成" },
      },
    ],
  },

  {
    path: "/chat",
    component: () => import("@/views/chat/index"),
    // children: [
    //   {
    //     path: "https://panjiachen.github.io/vue-element-admin-site/#/",
    //     meta: { title: "聊天", icon: "Chat" },
    //   },
    // ],
  },

  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true },
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
