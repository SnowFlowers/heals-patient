import Vue from 'vue';
import page from 'page';

import router from './routes';

import '@/assets/sass/common.scss';

const app = new Vue({
  router,
  template: '<router-view></router-view>'
}).$mount('#app')
