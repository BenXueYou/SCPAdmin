import Vue from 'vue';
import router from './router';
import './style/element-variables.scss';
import './style/index.scss';
import ElementUI from 'element-ui';
import App from './App';

import store from '@/store/store.js';
// import './permission.js';

Vue.use(ElementUI);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
