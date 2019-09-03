const state = {
    user: {
        id: '',
        name: '',
        phone: ''
    }
}

const mutations = {
    LOGIN: function(state, user) {
        window.localStorage.setItem('id', JSON.stringify(user.id));
        window.localStorage.setItem('name', JSON.stringify(user.name));
        state.user = Object.assign({}, user);
    }
}

const actions = {
    login: function() {

    }
}


const getter = {
    getUser(state) {
        return state.user;
    }
}

export default {
    state,
    mutations,
    actions,
    getter
}