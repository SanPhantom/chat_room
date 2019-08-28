import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        name: 'index',
        redirect: '/list'
    }, {
        path: '/list',
        name: 'list',
        component: () =>
            import ('@/pages/List.vue')
    }, {
        path: '/chatroom',
        name: 'chatroom',
        component: () =>
            import ('@/pages/ChatRoom.vue')
    }]
})