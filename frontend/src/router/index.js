import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Landing from '@/pages/Landing'
import Candidate from '@/pages/Candidate'
import Interview from '@/pages/Interview'
import Vote from '@/pages/Vote'

Vue.use(Router)
Vue.use(VueResource)

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    const position = {}
    // check if any matched route config has meta that requires scrolling to top
    if (to.matched.some(m => m.meta.scrollToTop)) {
      // cords will be used if no selector is provided,
      // or if the selector didn't match any element.
      position.x = 0
      position.y = 0
    }
    // if the returned position is falsy or an empty object,
    // will retain current scroll position.
    return position
  }
}

export default new Router({
  mode: 'history',
  base: __dirname,
  scrollBehavior,
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing
    },
    {
      path: '/candidate',
      name: 'candidate',
      component: Candidate,
      meta: { scrollToTop: true }
    },
    {
      path: '/interview',
      name: 'interview',
      component: Interview,
      meta: { scrollToTop: true }
    },
    {
      path: '/vote',
      name: 'vote',
      component: Vote,
      meta: { scrollToTop: true }
    }
  ]
})
