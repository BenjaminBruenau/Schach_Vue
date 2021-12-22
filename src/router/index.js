import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Schach from "@/components/game/Schach";
import PlayerStats from '@/components/statistics/PlayerStats';
import Store from "@/components/shop/Store";


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
  },
  {
    path: '/shop',
    name: 'Chess | Shop',
    component: Store
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
