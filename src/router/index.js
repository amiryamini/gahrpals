import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Settings from '@/components/Settings'
import Friends from '@/components/Friends'
import MyProfile from '@/components/MyProfile'


Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Register',
      component: Register
    },
    {
    path: '/login',
    name: 'Login',
    component: Login
    },
    {
    path: '/settings',
    name: 'Settings',
    component: Settings
    },
      {
          path: '/friends',
          name: 'Friends',
          component: Friends
      },
      {
          path: '/myProfile',
          name: 'MyProfile',
          component: MyProfile
      }
  ]
})
