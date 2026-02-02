import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Blog from './views/Blog.vue'
import BlogPost from './views/BlogPost.vue'
import Faq from './views/Faq.vue'
import Comite from './views/Comite.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/blog/:slug',
    name: 'BlogPost',
    component: BlogPost
  },
  {
    path: '/faq',
    name: 'Faq',
    component: Faq
  },
  {
    path: '/comite',
    name: 'Comite',
    component: Comite
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

