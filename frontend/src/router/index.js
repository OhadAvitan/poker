import Vue from 'vue'
import VueRouter from 'vue-router'
import Deck from '../views/Deck.vue'
import Home from '../views/Home.vue'
import Flop from '../views/Flop.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
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
    // path: '/game/:id',
    path: '/game',
    component: Flop
  }
]

const router = new VueRouter({
  routes
})

export default router
