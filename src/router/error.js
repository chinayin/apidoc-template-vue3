import TestA from "/@/components/Test/TestA.vue"

/**
 * 错误页路由
 */
const errorRouter = {
  path: "/error",
  name: "error",
  component: TestA,
  // meta: {
  //   icon: "el-icon-position",
  //   title: "message.hserror",
  //   showLink: true,
  //   savedPosition: true,
  //   rank: 7
  // },
  children: [
    // {
    //   path: "/error/401",
    //   name: "401",
    //   component: () => import("/@/views/error/401.vue"),
    //   meta: {
    //     title: "message.hsfourZeroOne",
    //     showLink: true,
    //     savedPosition: true
    //   }
    // },
    {
      path: "/error/404",
      name: "error404",
      component: () => import("/~/error404.vue"),
      meta: {
        title: "message.hsfourZeroFour",
        showLink: true,
      }
    }
  ]
};

export default errorRouter;
