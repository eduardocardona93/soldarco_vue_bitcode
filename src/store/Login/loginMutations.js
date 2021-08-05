const mutations = {
    saveUser: (state, user) => {
        state.user = user;
        localStorage.setItem('user', JSON.stringify(state.user));
    },

    getUser: (state, user) => {
        state.user = user
    }
}

export default mutations;