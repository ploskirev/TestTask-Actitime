import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store/index.js';
import Features from '../views/Features.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Features',
    component: Features
    // component: () => import(/* webpackChunkName: "features" */ '../views/Features.vue')
  },
  {
    path: '/feature/:id',
    name: 'Feature',
    component: function() {
      return import(/* webpackChunkName: "feature" */ '../views/Feature.vue');
    }
  },
  {
    path: '/about',
    name: 'About',
    component: function() {
      return import(/* webpackChunkName: "about" */ '../views/About.vue');
    }
  },
  {
    path: '/registration',
    name: 'Registration',
    component: function() {
      return import(/* webpackChunkName: "registration" */ '../views/Registration.vue');
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: function() {
      return import(/* webpackChunkName: "login" */ '../views/Login.vue');
    }
  },
  {
    path: '/policy',
    name: 'Policy',
    component: function() {
      return import(/* webpackChunkName: "policy" */ '../views/Policy.vue');
    }
  },
  {
    path: '/userguide',
    name: 'User Guide',
    component: function() {
      return import(/* webpackChunkName: "userguide" */ '../views/Userguide.vue');
    }
  },
  {
    path: '/support',
    name: 'Support',
    component: function() {
      return import(/* webpackChunkName: "support" */ '../views/Support.vue');
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (store.getters.user && to.path === '/registration') {
    next('/login');
  } else if ((from.path === '/login' || from.path === '/registration') && (to.path === '/login' || to.path === '/registration')) {
    store.commit('clearError');
    next();
  } else {
    next();
  }
});

export default router;
