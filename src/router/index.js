import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Home from '@/pages/Home'
import Blog from '@/pages/Blog'
import Cv from '@/pages/Cv'
import Projects from '@/pages/Projects'

Vue.use(Router)

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
      name: 'Cv',
      components: {
        header: Header,
        content: Projects,
        footer: Footer
      }
    }
  ]
})
