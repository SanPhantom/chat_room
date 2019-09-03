import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "lib-flexible/flexible"
// import 'hotcss/src/hotcss'

import VueSocketIO from 'vue-socket.io'
import socketio from 'socket.io-client'

Vue.use(VueSocketIO, socketio('ws://192.168.5.117:3000', { path: '/chat/socket.io' }));

import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)

import './assets/css/main.css'



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
            if (this.getCookie('id')) {
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