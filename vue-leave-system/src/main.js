import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import router from './router.js';
import App from './App.vue';

Vue.config.productionTip = true;
Vue.use(BootstrapVue);

new Vue({
    render: h => h(App),
    //路由定義在router.js
    router  
}).$mount('#app');
