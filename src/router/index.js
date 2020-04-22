import Vue from 'vue';
import VueRouter from 'vue-router';
import Tasks from '../views/Tasks';
import Login from '../views/Login';
import Register from '../views/Register';
import firebase from 'firebase';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'tasks',
    component: Tasks,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if(requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next('home')
  else next();
});

export default router;
