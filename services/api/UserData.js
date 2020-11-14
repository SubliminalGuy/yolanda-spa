import axios from 'axios'

export default {
    async getOrganisations ({$axios}) {
        const organisations = await this.$axios.get("/organisations")
        return organisations
    },
    
    getVolunteers () {
        return axios.get("/volunteers")
        .then(response => {
            return response.data
        })
    },

}