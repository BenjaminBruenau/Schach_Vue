import {createApp, h} from 'vue'
import App from './App.vue'
import router from './router'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

import './registerServiceWorker'
import {getAuth} from "firebase/auth";


let app;


/// FIREBASE
const firebaseConfig = {

  apiKey: "AIzaSyDZZM_fOa2jnbtwcVZK_YgEP5I4AWgtFBU",

  authDomain: "schach-vue.firebaseapp.com",

  projectId: "schach-vue",

  storageBucket: "schach-vue.appspot.com",

  messagingSenderId: "8591796491",

  appId: "1:8591796491:web:bca54d743c688ebb1c9a0e",

  measurementId: "G-G12H9CMHL7"

};


// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

getAnalytics(firebaseApp);

// Delay Vue App Init until Firebase loaded
const auth = getAuth()
auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp({
      render: () => h(App)
    })
    app.use(router);
    app.use(Quasar, quasarUserOptions);
    app.mount('#app')
  }
})


export async function sleep(delay) {
  await privateSleep(delay);
}
const privateSleep = (delay) => new Promise((resolve => setTimeout(resolve, delay)));

