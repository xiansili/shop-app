import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Category from './views/Category.vue'
import Cart from './views/Cart.vue'
import Me from './views/Me.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/me',
      name: 'me',
      component: Me
    },
  ]
})
