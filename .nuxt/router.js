import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _6ca9121f = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _ef507444 = () => import('../pages/chat/index.vue' /* webpackChunkName: "pages/chat/index" */).then(m => m.default || m)
const _1927dd39 = () => import('../pages/user/_id.vue' /* webpackChunkName: "pages/user/_id" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _6ca9121f,
			name: "index"
		},
		{
			path: "/chat",
			component: _ef507444,
			name: "chat"
		},
		{
			path: "/user/:id?",
			component: _1927dd39,
			name: "user-id"
		}
    ],
    fallback: false
  })
}
