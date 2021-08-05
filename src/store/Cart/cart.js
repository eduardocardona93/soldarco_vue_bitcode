import states from './cartStates';
import mutations from './cartMutations';
import actions from './cartActions';
import getters from './cartGetters';

const cart = {
    namespaced: true,
    state: states,
    actions: actions,
    mutations: mutations,
    getters: getters,
}

export default cart;