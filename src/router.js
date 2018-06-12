import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Home from '@/views/Home'
import Blog from '@/views/Blog'
import Cv from '@/views/Cv'
import Projects from '@/views/Projects'
import Apropos from '@/views/Apropos'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        header: Header,
        content: Home,
        footer: Footer
      }
    },
    {
      path: '/blog',
      name: 'Blog',
      components: {
        header: Header,
        content: Blog,
        footer: Footer
      }
    },
    {
      path: '/cv',
      name: 'Cv',
      components: {
        header: Header,
        content: Cv,
        footer: Footer
      }
    },
    {
      path: '/projets',
      name: 'Projets',
      components: {
        header: Header,
        content: Projects,
        footer: Footer
      }
    },
    {
      path: '/projets/:project',
      name: 'Projet',
      components: {
        header: Header,
        content: Projects,
        footer: Footer
      }
    },
    {
      path: '/a-propos',
      name: 'Apropos',
      components: {
        header: Header,
        content: Apropos,
        footer: Footer
      }
    }
  ]
})
