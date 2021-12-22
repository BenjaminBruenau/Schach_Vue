import {createApp, h} from 'vue'
import App from './App.vue'
import router from './router'


// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

import './registerServiceWorker'


const app = createApp({
  render: () => h(App)
})

//Vue.config.productionTip = false

app.use(router);
app.use(Quasar, quasarUserOptions);
//app.use(BootstrapVue)

app.mount('#app')
