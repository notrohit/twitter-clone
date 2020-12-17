import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import SideNav from './components/SideNav.vue'
import Tweets from './components/Tweets.vue'
import Explore from './components/Explore.vue'

import './assets/styles/index.css';

Vue.config.productionTip = true;

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    // { path: '/page', component: App },
    { path: '/side', component: SideNav },
    { path: '/', component: Tweets },
    { path: '/explore', component: Explore },
  ],
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
