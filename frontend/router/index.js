import Vue from 'vue'
import Router from 'vue-router'
import Blogs from '@/components/Blogs'
import Photos from '@/components/Photos'
import Moment from '@/components/Moment'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/photos',
      name: 'photos',
      component: Photos
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: Blogs
    },
    {
      path: '/moment',
      name: 'moment',
      component: Moment
    },
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
