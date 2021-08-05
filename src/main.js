import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './routes/router';
import './assets/scss/soldarco.scss';
import VueSweetalert2 from 'vue-sweetalert2';
import VideoBg from 'vue-videobg';
import store from './store/store';

import 'material-design-icons-iconfont/dist/material-design-icons.css';
import 'sweetalert2/dist/sweetalert2.min.css';

// Components
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
import VuePaginate from 'vue-paginate';
import NoData from './components/Shared/NoData.vue';
import Loading from "vue-loading-overlay";


Vue.component('Select', vSelect);
Vue.component('video-bg', VideoBg);
Vue.component('no-data', NoData);
Vue.use(Loading, { color: '#1976D2', loader: 'spinner' })
Vue.use(VuePaginate)
Vue.use(VueSweetalert2);


import './assets/scss/soldarco.scss';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  iconfont: 'md',
  render: h => h(App)
}).$mount('#app')