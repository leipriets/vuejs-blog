require('./bootstrap');
window.Vue = require('vue');

import router from "./router";
import VueChartkick from 'vue-chartkick';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import Chart from 'chart.js'
import locale from 'iview/dist/locale/en-US';
import  common from "./common";

Vue.mixin(common);

Vue.use(VueChartkick, {
    adapter: Chart
});

Vue.use(iView, { locale });

Vue.component('main-app',require('./components/app.vue').default);

const app = new Vue({
    el: '#app',
    router 
});
