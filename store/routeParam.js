export const state = () => ({

    routeParam: ""
})
   
export const getters = {
    getRouteParam(state) {
        return state.routeParam
    }
}

export const mutations = {
    changeRouteParam(state, payload) {
        state.routeParam = payload
    }
}