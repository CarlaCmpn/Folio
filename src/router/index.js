import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home.vue'
import About from '../pages/About/About.vue'
import Contact from '../pages/Contact/Contact.vue'
import Project from '../pages/Project/Project.vue'
import PageNotFound from '../pages/PageNotFound/PageNotFound.vue'
import Intro from '../pages/Intro/Intro.vue'
import SubmissionSuccess from '../pages/SubmissionSuccess/SubmissionSuccess.vue'
import SubmissionFail from '../pages/SubmissionFail/SubmissionFail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Intro
    },
    {
      path: '/works',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/contact',
      component: Contact
    },
    {
      path: '/project/portfolio',
      component: Project
    },
    {
      path: '/project/space_game',
      component: Project
    },
    {
      path: '/project/travel_diary',
      component: Project
    },
    {
      path: '/project/*',
      component: PageNotFound
    },
    // {
    //   path: '/thanks',
    //   name: 'success',
    //   component: SubmissionSuccess
    // },
    // {
    //   path: '/404',
    //   name: 'fail',
    //   component: SubmissionFail
    // },
    {
      path: '/*',
      component: PageNotFound
    },
  ]
})
