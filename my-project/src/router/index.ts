import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

import { getToken } from '@/api/login';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login/index.vue")
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {

  const token = getToken();

  if (token) {//判断用户是否登录
    if (Object.keys(from.query).length === 0) {//判断路由来源是否有query，处理不是目的跳转的情况
      next()
    } else {
      const redirect = from.query.redirect as string//如果来源路由有query
      if (to.path === redirect) {//这行是解决next无限循环的问题
        next()
      } else {
        next({ path: redirect })//跳转到目的路由
      }
    }
  } else {
    if (to.name === "login") {
      next()
    } else {
      next({
        name: "login",
        query: { redirect: to.fullPath }//将目的路由地址存入login的query中
      })
    }
  }
})

export default router;
