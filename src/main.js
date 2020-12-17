import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Tweets from './components/Tweets.vue'
import Explore from './components/Explore.vue'

import './assets/styles/index.css';

Vue.config.productionTip = true;

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    // { path: '/page', component: App },
    { path: '/', component: Tweets },
    { path: '/explore', component: Explore },
    { path: '/notifications', component: Explore },
    { path: '/messages', component: Explore },
    { path: '/bookmarks', component: Explore },
    { path: '/lists', component: Explore },
    { path: '/profile', component: Explore },
  ],
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
