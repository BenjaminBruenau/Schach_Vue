import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Schach from "@/components/game/Schach";
import PlayerStats from '@/components/statistics/PlayerStats';
import Store from "@/components/shop/Store";
import Login from "@/components/authentication/Login";
import Register from "@/components/authentication/Register";
import {getAuth} from "firebase/auth";


const routes = [
  {
    path: '/',
    name: 'Chess | Home',
    component: Home,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/about',
    name: 'Chess | About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/schach',
    name: 'Chess | Play',
    component: Schach,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/statistics',
    name: 'Chess | Statistics',
    component: PlayerStats,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/shop',
    name: 'Chess | Shop',
    component: Store,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/login',
    name: 'Chess | Login',
    component: Login,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/register',
    name: 'Chess | Register',
    component: Register,
    meta: {
      requiresAuth: false,
    },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.name || 'Chess | Not Found'
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const auth = getAuth();
    if (!auth.currentUser) {
      console.log('You need to be logged in!')
      next('/login')
    } else {
      next();
    }
  } else {
    next();
  }
})

export default router
