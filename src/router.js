import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        name: 'index',
        // redirect: '/list',
        component: () =>
            import ('@/pages/Index.vue'),
        redirect: '/list',
        children: [{
            path: '/list',
            name: 'list',
            component: () =>
                import ('@/pages/List.vue')
        }]
    }, {
        path: '/chatroom',
        name: 'chatroom',
        component: () =>
            import ('@/pages/ChatRoom.vue')
    }, {
        path: '/login',
        name: 'login',
        component: () =>
            import ('@/pages/Login.vue')
    }, {
        path: '/register',
        name: 'register',
        component: () =>
            import ('@/pages/Register.vue')
    }]
})