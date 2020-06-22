import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _21f49426 = () => interopDefault(import('../pages/About.vue' /* webpackChunkName: "pages/About" */))
const _799cf6f9 = () => interopDefault(import('../pages/Contact.vue' /* webpackChunkName: "pages/Contact" */))
const _a409ec4a = () => interopDefault(import('../pages/Products.vue' /* webpackChunkName: "pages/Products" */))
const _f20f8856 = () => interopDefault(import('../pages/Services.vue' /* webpackChunkName: "pages/Services" */))
const _3f6e04ee = () => interopDefault(import('../pages/Test.vue' /* webpackChunkName: "pages/Test" */))
const _aed38354 = () => interopDefault(import('../pages/product/_id/index.vue' /* webpackChunkName: "pages/product/_id/index" */))
const _6b8b61ea = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/About",
    component: _21f49426,
    name: "About"
  }, {
    path: "/Contact",
    component: _799cf6f9,
    name: "Contact"
  }, {
    path: "/Products",
    component: _a409ec4a,
    name: "Products"
  }, {
    path: "/Services",
    component: _f20f8856,
    name: "Services"
  }, {
    path: "/Test",
    component: _3f6e04ee,
    name: "Test"
  }, {
    path: "/product/:id?",
    component: _aed38354,
    name: "product-id"
  }, {
    path: "/",
    component: _6b8b61ea,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
