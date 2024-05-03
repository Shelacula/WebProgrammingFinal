import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/StatsView.vue'
import { routes } from 'vue-router/auto-routes'
import {refSession} from "@/viewModel/userSession";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/stats',
      name: 'stats',
      component: () => import('../views/StatsView.vue')
    },
    {
      path: '/activity',
      name: 'activity',
      component: () => import('../views/ActivityView.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/AdminView.vue')
    },
    {
      path: '/friend',
      name: 'friend',
      component: () => import('../views/FriendView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignUpView.vue')
    },
    {
      path: '/profiles/:id',
      component: () => import('../views/profiles/[id].vue')
    },
    {
      path: '/search/:searchKey',
      component: () => import('../views/SearchView.vue')
    },
    {
      path: '/login',
      component: () => import('../views/LoginView.vue')
    }
  ]
})


router.beforeEach((to, from, next) => {
  const session = refSession()
  if (!['/login', '/signup'].includes(to.path) && !session.user) {
    next('/login')
  }else {
    next()
  }
})

export default router
