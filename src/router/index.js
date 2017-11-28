import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Home from '@/pages/Home'
import Blog from '@/pages/Blog'

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
    }
  ]
})
