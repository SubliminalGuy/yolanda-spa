
<template>
<div>
  <h1 class="text-center text-gray-900 bg-transparent tracking-tight font-semibold text-5xl font-sans">
          Our Tasty Volunteers</h1>
<div class="max-h-full w-full flex justify-center items-center">
    <div class="flex w-4/5 justify-center items-center">
        <div class="flex flex-wrap justify-center md:justify-evenly my-6 md:my-12 ">
            
            <user-card v-for="volunteer in volunteers" :key="`volunteer${volunteer._id}`" :id="volunteer.id" :name="volunteer.name" :roles="volunteer.roles" :picture="volunteer.image_url"></user-card>    
        
        </div>
    </div>
</div>
</div>
</template>

<script>

import UserCard from "../../components/UserCard"
import axios from 'axios'

export default {
  name: 'volunteers',
   components: {
            UserCard
        },


    async asyncData () {
     let response = await axios.get('https://safe-hamlet-27016.herokuapp.com/volunteers')
      return {volunteers: response.data}
  
    },

    created() {
            console.clear()
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