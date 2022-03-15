import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Daohang from '@/components/Daohang.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';

Vue.config.productionTip = false
Vue.component('Layout',Layout)
Vue.component('Icon',Icon)
Vue.component('Daohang',Daohang)
new Vue({
  router:router,
  store,
  render: h => h(App)
}).$mount('#app')
