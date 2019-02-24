import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/home/Home.vue';
import Creator from './components/creator/Creator.vue';
import Login from './components/login/Login.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/creator',
      name: 'creator',
      component: Creator,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ],
});
