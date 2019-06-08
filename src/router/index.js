import Vue from 'vue'
import Router from 'vue-router'
import Cinema from "../views/Cinema/Cinema"
import Mine from "../views/Mine/Mine"
import Movie from "../views/Movie/Movie"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/movie'
    },{
      path: '/movie',
      name: 'movie',
      component: () => import('@/views/Movie/Movie'),
      redirect: '/movie/playing',
      children: [
        {
          path: 'city',
          name: 'city',
          component: () => import('@/components/City'),
        },{
          path: 'playing',
          name: 'playing',
          component: () => import('@/components/Playing'),
        },{
          path: 'coming',
          name: 'coming',
          component: () => import('@/components/Coming'),
        },{
          path: 'search',
          name: 'search',
          component: () => import('@/components/Search'),
        },{
          path: 'detail/:id',
          name: 'detail',
          component: () => import('@/components/Detail'),
          props: true
        }
      ]
    },
    {
    	path: '/mine',
      name: 'mine',
      component: () => import('@/views/Mine/Mine')
    },{
    	path: '/cinema',
      name: 'cinema',
      component: () => import('@/views/Cinema/Cinema')
    }
  ]
})
