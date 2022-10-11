import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _349c8c90 = () => interopDefault(import('../pages/About.vue' /* webpackChunkName: "pages/About" */))
const _42a7000b = () => interopDefault(import('../pages/Contact.vue' /* webpackChunkName: "pages/Contact" */))
const _06322309 = () => interopDefault(import('../pages/Products.vue' /* webpackChunkName: "pages/Products" */))
const _41a155fa = () => interopDefault(import('../pages/Services.vue' /* webpackChunkName: "pages/Services" */))
const _2067ddb7 = () => interopDefault(import('../pages/Test.vue' /* webpackChunkName: "pages/Test" */))
const _a104ce30 = () => interopDefault(import('../pages/product/_id/index.vue' /* webpackChunkName: "pages/product/_id/index" */))
const _e41116c6 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/About",
    component: _349c8c90,
    name: "About"
  }, {
    path: "/Contact",
    component: _42a7000b,
    name: "Contact"
  }, {
    path: "/Products",
    component: _06322309,
    name: "Products"
  }, {
    path: "/Services",
    component: _41a155fa,
    name: "Services"
  }, {
    path: "/Test",
    component: _2067ddb7,
    name: "Test"
  }, {
    path: "/product/:id?",
    component: _a104ce30,
    name: "product-id"
  }, {
    path: "/",
    component: _e41116c6,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
