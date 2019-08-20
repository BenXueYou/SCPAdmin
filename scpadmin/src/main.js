import Vue from 'vue';
import router from './router';
import './style/element-variables.scss';
import './style/index.scss';
import ElementUI from 'element-ui';
import App from './App';

import store from '@/store/store.js';
// import './permission.js';
import echarts from 'echarts';
import businessAjax from '@/http/businessAjax.js';
import deviceAjax from '@/http/deviceAjax.js';
import homeAjax from '@/http/homeAjax.js';
import loginAjax from '@/http/loginAjax.js';
import userAjax from '@/http/userAjax.js';
import staticsAjax from '@/http/staticsAjax.js';
import realAjax from '@/http/realAjax.js';
Vue.prototype.$echarts = echarts;
Vue.use(ElementUI);

Vue.use(loginAjax);
Vue.use(businessAjax);
Vue.use(deviceAjax);
Vue.use(homeAjax);
Vue.use(userAjax);
Vue.use(staticsAjax);
Vue.use(realAjax);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
