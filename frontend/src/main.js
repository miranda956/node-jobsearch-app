
import Vue from 'vue';
import App from './App';
import router from './router'
import VeeValidate from 'vee-validate'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'
import Spinner from 'vue-simple-spinner';
import JwPagination from 'jw-vue-pagination';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue  } from 'bootstrap-vue'

Vue.use(VeeValidate)

Vue.use(BootstrapVue)

Vue.config.productionTip = false
Vue.component('jw-pagination', JwPagination);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
  template: '<App/>',
  components: { App }
})

