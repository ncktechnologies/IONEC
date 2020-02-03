import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ba0e761a = () => interopDefault(import('..\\pages\\About.vue' /* webpackChunkName: "pages_About" */))
const _6b4faef4 = () => interopDefault(import('..\\pages\\Contact.vue' /* webpackChunkName: "pages_Contact" */))
const _74a609ee = () => interopDefault(import('..\\pages\\Products.vue' /* webpackChunkName: "pages_Products" */))
const _4da33be8 = () => interopDefault(import('..\\pages\\Services.vue' /* webpackChunkName: "pages_Services" */))
const _2ec4ff1c = () => interopDefault(import('..\\pages\\Test.vue' /* webpackChunkName: "pages_Test" */))
const _70b65c4d = () => interopDefault(import('..\\pages\\product\\_id\\index.vue' /* webpackChunkName: "pages_product__id_index" */))
const _4b3e7fd8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/About",
    component: _ba0e761a,
    name: "About"
  }, {
    path: "/Contact",
    component: _6b4faef4,
    name: "Contact"
  }, {
    path: "/Products",
    component: _74a609ee,
    name: "Products"
  }, {
    path: "/Services",
    component: _4da33be8,
    name: "Services"
  }, {
    path: "/Test",
    component: _2ec4ff1c,
    name: "Test"
  }, {
    path: "/product/:id?",
    component: _70b65c4d,
    name: "product-id"
  }, {
    path: "/",
    component: _4b3e7fd8,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
