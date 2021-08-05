// import libraries

import Vue from 'vue';
import Vuex from 'vuex';

// Modules
import cart from './Cart/cart';
import login from './Login/login'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        cart,
        login
    }
});