import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _8c6a6c9c = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages/about/index" */))
const _655b7eac = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _aa44d752 = () => interopDefault(import('..\\pages\\users\\index.vue' /* webpackChunkName: "pages/users/index" */))
const _18a2c07f = () => interopDefault(import('..\\pages\\users\\_id.vue' /* webpackChunkName: "pages/users/_id" */))
const _c89848d6 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _8c6a6c9c,
    name: "about"
  }, {
    path: "/login",
    component: _655b7eac,
    name: "login"
  }, {
    path: "/users",
    component: _aa44d752,
    name: "users"
  }, {
    path: "/users/:id",
    component: _18a2c07f,
    name: "users-id"
  }, {
    path: "/",
    component: _c89848d6,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
