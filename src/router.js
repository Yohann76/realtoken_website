import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Blog from './views/Blog.vue'
import BlogPost from './views/BlogPost.vue'
import Faq from './views/Faq.vue'
import Comite from './views/Comite.vue'
import LiensUtiles from './views/LiensUtiles.vue'
import Reg from './views/Reg.vue'
import Partenaires from './views/Partenaires.vue'
import Confidentialite from './views/Confidentialite.vue'
import MentionsLegales from './views/MentionsLegales.vue'

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
  },
  {
    path: '/liens-utiles',
    name: 'LiensUtiles',
    component: LiensUtiles
  },
  {
    path: '/reg',
    name: 'Reg',
    component: Reg
  },
  {
    path: '/devenir-partenaire',
    name: 'Partenaires',
    component: Partenaires
  },
  {
    path: '/confidentialite',
    name: 'Confidentialite',
    component: Confidentialite
  },
  {
    path: '/mentions-legales',
    name: 'MentionsLegales',
    component: MentionsLegales
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Ancre explicite dans l’URL (ex: /page#section) → on scroll vers l’élément
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    // Retour arrière : restaurer la position sauvegardée par le navigateur
    if (savedPosition) {
      return savedPosition
    }
    // Par défaut : toujours en haut de la page
    return { top: 0 }
  }
})

export default router

