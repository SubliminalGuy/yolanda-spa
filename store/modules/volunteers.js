export default {

    state: {
        volunteers: []
        
    },

    getters: {
        getVolunteers: function (state) {
            return state.volunteers;
        }
    },

    mutations: {
        initialiseStore: function (state) {
            let localVolunteers = JSON.parse(localStorage.getItem('volunteersLocal'));
            state.volunteers = localVolunteers
        },
        addVolunteers: function (state, volunteers) {
            state.volunteers = volunteers;
            localStorage.setItem('volunteersLocal', JSON.stringify(volunteers))
        }
    },

    actions: {
        addVolunteers: function (context, volunteers) {
            context.commit('addVolunteers', volunteers)
             
        }
    }

}