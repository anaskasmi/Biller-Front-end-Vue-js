import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import Vuetify from 'vuetify/lib'
import '@fortawesome/fontawesome-free/css/all.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)

Vue.use(VueSweetalert2);
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.prototype.$axios = axios
export default new Vuetify({
    icons: {
        iconfont: 'fa',
    },
})

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')