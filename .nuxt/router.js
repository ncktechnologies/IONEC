import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _667d2b38 = () => interopDefault(import('../pages/About.vue' /* webpackChunkName: "pages/About" */))
const _8347dcea = () => interopDefault(import('../pages/Contact.vue' /* webpackChunkName: "pages/Contact" */))
const _011f4189 = () => interopDefault(import('../pages/Products.vue' /* webpackChunkName: "pages/Products" */))
const _4bc718fa = () => interopDefault(import('../pages/Services.vue' /* webpackChunkName: "pages/Services" */))
const _f0af8792 = () => interopDefault(import('../pages/Test.vue' /* webpackChunkName: "pages/Test" */))
const _6f2aca68 = () => interopDefault(import('../pages/product/_id/index.vue' /* webpackChunkName: "pages/product/_id/index" */))
const _0ec2e61d = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/About",
    component: _667d2b38,
    name: "About"
  }, {
    path: "/Contact",
    component: _8347dcea,
    name: "Contact"
  }, {
    path: "/Products",
    component: _011f4189,
    name: "Products"
  }, {
    path: "/Services",
    component: _4bc718fa,
    name: "Services"
  }, {
    path: "/Test",
    component: _f0af8792,
    name: "Test"
  }, {
    path: "/product/:id?",
    component: _6f2aca68,
    name: "product-id"
  }, {
    path: "/",
    component: _0ec2e61d,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
