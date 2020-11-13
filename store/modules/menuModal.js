export default {

    state: {
        menuModal: false
        
    },

    getters: {
        getMenuModal: function (state) {
            return state.menuModal;
        }
    },

    mutations: {
        changeMenuModal: function (state) {
            state.menuModal = !state.menuModal;
            
        }
    },

    actions: {
        changeMenuModal: function (context) {
            context.commit('changeMenuModal')
             
        }
    }

}