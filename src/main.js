import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import firebase from 'firebase';

Vue.config.productionTip = false

let app = '';

//firebase
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
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();


firebase.auth().onAuthStateChanged(() =>{ // verifico que no se creen multiples instancias de la aplicacion
  if(!app) {
    new Vue({                            
      router,
      render: h => h(App),
    }).$mount('#app')    
  }
});


