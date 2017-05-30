import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Calendar from '@/components/calendar/Calendar';
import Clients from '@/components/clients/Clients';
import ModalNew from '@/components/calendar/ModalNew';

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
      children: [
        {
          path: 'modal',
          component: ModalNew,
        },
      ],
    },
  ],
});
