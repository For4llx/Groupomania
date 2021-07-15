import Vue from 'vue';
import VueRouter from 'vue-router';
import Signin from '../views/Signin.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Signin',
    component: Signin,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue'),
  },
  {
    path: '/forum',
    name: 'Forum',
    component: () => import('../views/Forum.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
