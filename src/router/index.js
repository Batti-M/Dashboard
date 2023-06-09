import Welcome from '@/views/Welcome.vue'
import Chatroom from '@/views/Chatroom.vue'
import TeamMembers from '@/views/Teams/TeamMembers.vue'

import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '../firebase/config'

const requireAuth = (to, from, next) => {
  let user = auth.currentUser
  if (!user) {
    next({ name: 'Welcome' })
  }else{
    next()	
  }
}

const requireNoAuth = (to, from, next) => {
  let user = auth.currentUser
  if (user) {
    next({ name: 'Chatroom' })
  }else{
    next()
  }
}


const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    beforeEnter: requireNoAuth
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom,
    beforeEnter: requireAuth
  },
  {
    path: '/teamMembers',
    name: 'TeamMembers',
    component: TeamMembers,
    beforeEnter: requireAuth
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
