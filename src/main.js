import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueMeta from 'vue-meta';
import './assets/styles/reset.css';
import firebase from 'firebase/app';
import 'firebase/auth';

Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.use(VueMeta);

const firebaseConfig = {
  apiKey: "AIzaSyDaPVPGCnkDhM6ygRXiWOW4CNNW7Q65cII",
  authDomain: "actitime-page.firebaseapp.com",
  databaseURL: "https://actitime-page.firebaseio.com",
  projectId: "actitime-page",
  storageBucket: "actitime-page.appspot.com",
  messagingSenderId: "98591115881",
  appId: "1:98591115881:web:876ac97e2f84a87c59f0f8"
}

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
