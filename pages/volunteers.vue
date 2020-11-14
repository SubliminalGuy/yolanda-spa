
<template>
<div>
  <h1 class="text-center text-gray-900 bg-transparent tracking-tight font-semibold text-5xl font-sans">
          Our Tasty Volunteers</h1>
<div class="max-h-full w-full flex justify-center items-center">
    <div class="flex w-4/5 justify-center items-center">
        <div class="flex flex-wrap justify-center md:justify-evenly my-6 md:my-12 ">
            
            <user-card v-for="volunteer in getVolunteers" :key="`volunteer${volunteer._id}`" :id="volunteer.id" :name="volunteer.name" :roles="volunteer.roles" :picture="volunteer.image_url"></user-card>    
        
        </div>
    </div>
</div>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
import UserCard from "../components/UserCard"
//import UsersAPI from '../services/api/UserData'

export default {
  name: 'volunteers',
   components: {
            UserCard
        },

    computed: {
            ...mapGetters([
                'getVolunteers',
            ])
        },    

    created() {
            console.clear()
            
            fetch('https://safe-hamlet-27016.herokuapp.com/volunteers')
              .then(res => {
                res.json()
              .then(post => {
                this.$store.dispatch('addVolunteers', post)
              })
              })
        },
            
            
               
        
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1 {
    text-align: center;
    margin-top: 15px;
    }


</style>