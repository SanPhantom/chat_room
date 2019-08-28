import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "lib-flexible/flexible"
// import 'hotcss/src/hotcss'


import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)

import './assets/css/main.css'



Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    render: h => h(App),
}).$mount('#app')