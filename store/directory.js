export const state = () => ({
    directory: ''
})

export const mutations = {
    saveInfo(state, payload) {
        state.directory = payload.directory
    }
}