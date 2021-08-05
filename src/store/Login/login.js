import states from './loginStates';
import mutations from './loginMutations';
import actions from './loginActions';
import getters from './loginGetters';

const login = {
    namespaced: true,
    state: states,
    actions: actions,
    mutations: mutations,
    getters: getters,
}

export default login;