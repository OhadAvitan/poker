import Vue from 'vue'
import VueRouter from 'vue-router'
import Deck from '../views/Deck.vue'
import Home from '../views/Home.vue'
import Table from '../views/Table.vue'
import About from '../views/About.vue'
import SignUp from '../views/SignUp.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/deck',
    component: Deck
  },
  {
    path: '/about',
    component: About
  },
  {
    // path: '/table/:id',
    path: '/table/:_id',
    component: Table
  },
  {
    // path: '/table/:id',
    path: '/signup/:tableId',
    component: SignUp
  },
  {
    // path: '/table/:id',
    path: '/login',
    component: Login
  },
  // {
  //   // path: '/table/:id',
  //   path: '/table',
  //   component: Home
  // }
]

const router = new VueRouter({
  routes
})

export default router
