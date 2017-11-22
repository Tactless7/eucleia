import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        header: Header,
        content: Home
        // footer: Footer
      }
    }
  ]
})
