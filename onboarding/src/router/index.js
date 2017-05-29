import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Calendar from '@/components/Calendar';
import Clients from '@/components/Clients';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar,
    },
    {
      path: '/clients',
      name: 'Clients',
      component: Clients,
    },
  ],
});
