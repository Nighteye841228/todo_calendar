import Vue from 'vue';
import Buefy from 'buefy';
import App from './App.vue';
import 'buefy/dist/buefy.css';
import VueCookies from 'vue-cookies';

Vue.use(Buefy);
Vue.use(VueCookies);
Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App),
}).$mount('#app');
