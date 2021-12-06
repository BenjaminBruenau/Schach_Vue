import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Schach from "@/components/game/Schach";
import PlayerStats from '@/components/statistics/PlayerStats';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Chess | Home',
    component: Home
  },
  {
    path: '/about',
    name: 'Chess | About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/schach',
    name: 'Chess | Play',
    component: Schach
  },
  {
    path: '/statistics',
    name: 'Chess | Statistics',
    component: PlayerStats
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
