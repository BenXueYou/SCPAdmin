import Vue from 'vue';
import Router from 'vue-router';
// import Home from '@/pages/home/Home';
const Login = () => import(/* webpackChunkName: "group-foo" */ '@/pages/login/Login');
const Main = () => import(/* webpackChunkName: "group-foo" */ '@/pages/main/Main');
const ChargePile = () => import(/* webpackChunkName: "group-foo" */ '@/pages/device/ChargePile');
const ChargeAddress = () => import(/* webpackChunkName: "group-foo" */ '@/pages/device/ChargeAddress');
const ChargeFactory = () => import(/* webpackChunkName: "group-foo" */ '@/pages/device/ChargeFactory');
const ChargeStation = () => import(/* webpackChunkName: "group-foo" */ '@/pages/device/ChargeStation');
const AppUser = () => import(/* webpackChunkName: "group-foo" */ '@/pages/userManage/appUser');
const Operator = () => import(/* webpackChunkName: "group-foo" */ '@/pages/userManage/operator');
const CardUser = () => import(/* webpackChunkName: "group-foo" */ '@/pages/userManage/cardUser');

const RechargeRecord = () => import(/* webpackChunkName: "group-foo" */ '@/pages/businessRecord/RechargeRecord');
const ChargeRecord = () => import(/* webpackChunkName: "group-foo" */ '@/pages/businessRecord/ChargeRecord');
const RefrundRecord = () => import(/* webpackChunkName: "group-foo" */ '@/pages/businessRecord/RefrundRecord');

const AppUserStatics = () => import(/* webpackChunkName: "group-foo" */ '@/pages/staticsData/AppUserStatics');
const ChargePileStatics = () => import(/* webpackChunkName: "group-foo" */ '@/pages/staticsData/ChargePileStatics');
const ChargeStationStatics = () => import(/* webpackChunkName: "group-foo" */ '@/pages/staticsData/ChargeStationStatics');
const OperatorStatics = () => import(/* webpackChunkName: "group-foo" */ '@/pages/staticsData/OperatorStatics');

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
          title: "充电桩地址"
        },
        {
          path: "ChargeFactory",
          name: "ChargeFactory",
          component: ChargeFactory,
          title: "充电桩厂商"
        },
        {
          path: "ChargeStation",
          name: "ChargeStation",
          component: ChargeStation,
          title: "充电站管理"
        },
        {
          path: "AppUser",
          name: "AppUser",
          component: AppUser,
          title: "微信/APP用户"
        },
        {
          path: "Operator",
          name: "Operator",
          component: Operator,
          title: "运营商管理"
        },
        {
          path: "CardUser",
          name: "CardUser",
          component: CardUser,
          title: "充电卡管理"
        },
        {
          path: "ChargeRecord",
          name: "ChargeRecord",
          component: ChargeRecord,
          title: "充电记录"
        },
        {
          path: "RechargeRecord",
          name: "RechargeRecord",
          component: RechargeRecord,
          title: "充值记录"
        },
        {
          path: "RefrundRecord",
          name: "RefrundRecord",
          component: RefrundRecord,
          title: "退款记录"
        },
        {
          path: "AppUserStatics",
          name: "AppUserStatics",
          component: AppUserStatics,
          title: "app用户统计"
        },
        {
          path: "ChargePileStatics",
          name: "ChargePileStatics",
          component: ChargePileStatics,
          title: "充电桩统计"
        },
        {
          path: "ChargeStationStatics",
          name: "ChargeStationStatics",
          component: ChargeStationStatics,
          title: "充电站统计"
        },
        {
          path: "OperatorStatics",
          name: "OperatorStatics",
          component: OperatorStatics,
          title: "运营商统计"
        },
      ]
    }
  ]
});
