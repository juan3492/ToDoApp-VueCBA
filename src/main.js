import Vue from 'vue'
import App from './App.vue'
import router from "./router";

//firebase
import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBscDxTz46W4Z6yev3DZaCa4s7sELnE_RM",
  authDomain: "workshop-vuecba.firebaseapp.com",
  databaseURL: "https://workshop-vuecba.firebaseio.com",
  projectId: "workshop-vuecba",
  storageBucket: "workshop-vuecba.appspot.com",
  messagingSenderId: "804130954399",
  appId: "1:804130954399:web:32033c1ae4574c32d396aa"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
