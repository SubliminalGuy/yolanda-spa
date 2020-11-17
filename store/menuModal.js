export const state = () => ({

    menuModal: false
})
   
export const getters = {
    getMenuModal(state) {
        return state.menuModal
    }
}

export const mutations = {
    changeMenuModal(state) {
        state.menuModal = !state.menuModal;
    }
}

export const actions = {
    changeMenuModal({commit}) {
        commit('changeMenuModal')
    }
}

