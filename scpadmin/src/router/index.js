import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/pages/login/Login';
// import Home from '@/pages/home/Home';
import Main from '@/pages/main/Main';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "Login",
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Main',
      name: 'Main',
      component: Main
    }
  ]
});
