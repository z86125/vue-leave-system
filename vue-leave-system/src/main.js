import Vue from 'vue';
import router from './router.js'
import App from './App.vue';

Vue.config.productionTip = true;

new Vue({
    render: h => h(App),
    router
}).$mount('#app');
