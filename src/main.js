import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import "lib-flexible/flexible"
// import 'hotcss/src/hotcss'

import VueSocketIO from 'vue-socket.io'
import socketio from 'socket.io-client'

Vue.use(VueSocketIO, socketio('ws://192.168.5.117:3000', { path: '/chat/socket.io' }));

import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)

import './assets/css/main.css'

axios.defaults.baseURL = 'http://127.0.0.1:3000';
axios.defaults.headers.common['Token'] = window.localStorage.getItem('token') || '';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


Vue.prototype.$axios = axios;



Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
    sockets: {
        connect: function() {
            // this.$toast('socket connected');
        },
        send: function() {
            // console.log(data);
        },
        sendMsg: function() {
            // console.log(data);
        }
    },
    created() {
        this.checklogin();
        this.$socket.emit('join', {
            id: '123478',
            name: 'ttc',
            phone: '15972167950'
        });
    },
    beforeDestroy() {
        this.$socket.emit('discount', {
            id: '123478',
            name: 'ttc',
            phone: '15972167950'
        });
    },
    methods: {
        checklogin: function() {
            if (this.getCookie('token')) {
                this.$router.push('/');

            } else {
                this.$router.push('/login');
            }
        },
        getCookie: function(name) {
            return window.localStorage.getItem(name);
        }
    },
}).$mount('#app')