import Vue from 'vue'
import Router from 'vue-router'
import Moments from '@/Moments'
import Blogs from '@/Blogs'
import Photos from '@/Photos'
import Todos from '@/Todos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      alias: '/moments',
      name: 'moments',
      component: Moments
    },
    {
      path: '/photos',
      name: 'photos',
      component: Photos
    },
    {
      path: '/todos',
      name: 'todos',
      component: Todos
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: Blogs
    }
  ]
})
