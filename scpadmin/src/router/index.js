import Vue from 'vue';
import Router from 'vue-router';
// import Home from '@/pages/home/Home';
const Login = () => import(/* webpackChunkName: "group-foo" */ '@/pages/login/Login');
const Main = () => import(/* webpackChunkName: "group-foo" */ '@/pages/main/Main');
const ChargePile = () => import(/* webpackChunkName: "group-foo" */ '@/pages/device/ChargePile');
const ChargeAddress = () => import(/* webpackChunkName: "group-foo" */ '@/pages/device/ChargeAddress');
const ChargeFactory = () => import(/* webpackChunkName: "group-foo" */ '@/pages/device/ChargeFactory');
const ChargeStation = () => import(/* webpackChunkName: "group-foo" */ '@/pages/device/ChargeStation');

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
      component: Main,
      children: [
        {
          path: "ChargePile",
          name: "ChargePile",
          component: ChargePile,
          title: "充电桩管理"
        },
        {
          path: "ChargeAddress",
          name: "ChargeAddress",
          component: ChargeAddress,
          title: "充电桩管理"
        },
        {
          path: "ChargeFactory",
          name: "ChargeFactory",
          component: ChargeFactory,
          title: "充电桩管理"
        },
        {
          path: "ChargeStation",
          name: "ChargeStation",
          component: ChargeStation,
          title: "充电桩管理"
        },
      ]
    }
  ]
});
