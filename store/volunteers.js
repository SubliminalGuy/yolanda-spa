export const state = () => ({
    volunteers: []
})

export const getters = {
    getVolunteers: function (state) {
        return state.volunteers;
    }
}

export const mutations = {
    initialiseStore: function (state) {
        let localVolunteers = JSON.parse(localStorage.getItem('volunteersLocal'));
        state.volunteers = localVolunteers
    },
    addVolunteers: function (state, volunteers) {
        state.volunteers = volunteers;
        //localStorage.setItem('volunteersLocal', JSON.stringify(volunteers))
    }
}



