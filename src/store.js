import Vue from 'vue'
import Vuex from 'vuex'
import User from './storeModules/User'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        User,
    }
})