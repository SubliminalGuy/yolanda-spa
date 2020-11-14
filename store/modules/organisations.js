export default {

    state: {
        organisations: []
        
    },

    getters: {
        getOrganisations: function (state) {
            return state.organisations;
        }
    },

    mutations: {
        initialiseStore: function (state) {
            let localOrganisations = JSON.parse(localStorage.getItem('organisationsLocal'));
            state.organisations = localOrganisations
        },
        addOrganisations: function (state, organisations) {
            state.organisations = organisations;
            localStorage.setItem('organisationsLocal', JSON.stringify(organisations))
        }
    },

    actions: {
        addOrganisations: function (context, organisations) {
            context.commit('addOrganisations', organisations)
        }
    }

}