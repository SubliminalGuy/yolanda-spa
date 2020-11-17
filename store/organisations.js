
export const state = () => ({
    organisations: []
})

export const getters = {
    getOrganisations: function (state) {
        return state.organisations;
    }
}

export const mutations = {
    
    addOrganisations: function (state, organisations) {
        state.organisations = organisations;
        //localStorage.setItem('organisationsLocal', JSON.stringify(organisations))
    }
}



    
    